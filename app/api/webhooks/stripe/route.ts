import { headers } from "next/headers";
import { stripe } from "@/lib/stripe";
import { supabaseAdmin } from "@/lib/supabase";
import { updateUserSubscription, grantDocumentAccess, trackAnalyticsEvent } from "@/lib/auth";

export const runtime = "nodejs"; // ensure Node runtime (crypto APIs)
export const dynamic = "force-dynamic"; // do not cache

export async function POST(req: Request) {
  if (!stripe) return new Response(JSON.stringify({ ok: true }), { status: 200 });
  if (!supabaseAdmin) {
    console.error("Supabase admin client not initialized");
    return new Response(JSON.stringify({ error: "Database not configured" }), { status: 500 });
  }

  const sig = headers().get("stripe-signature");
  const whSecret = process.env.STRIPE_WEBHOOK_SECRET;
  const body = await req.text(); // raw body required

  try {
    const event = whSecret
      ? stripe.webhooks.constructEvent(body, sig!, whSecret)
      : JSON.parse(body);

    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object;
        console.log("checkout.session.completed", session.id);

        // Get customer email and find/create user
        const customerEmail = session.customer_details?.email;
        if (!customerEmail) {
          console.error("No customer email in session");
          break;
        }

        // Find user by email
        const { data: userData, error: userError } = await supabaseAdmin
          .from("users")
          .select("id")
          .eq("email", customerEmail)
          .single();

        if (userError || !userData) {
          console.error("User not found for email:", customerEmail);
          break;
        }

        const userId = userData.id;

        // Update subscription in database
        const subscription = await stripe.subscriptions.retrieve(session.subscription as string);
        const planType = getPlanTypeFromPriceId(subscription.items.data[0]?.price.id || "");

        await updateUserSubscription(userId, {
          stripe_customer_id: session.customer as string,
          stripe_subscription_id: session.subscription as string,
          plan_type: planType,
          status: subscription.status as any,
          current_period_start: new Date(
            (subscription as any).current_period_start * 1000,
          ).toISOString(),
          current_period_end: new Date(
            (subscription as any).current_period_end * 1000,
          ).toISOString(),
        });

        // Grant document access based on plan
        await grantAccessForPlan(userId, planType);

        // Track analytics
        await trackAnalyticsEvent(userId, "subscription_created", {
          plan_type: planType,
          stripe_session_id: session.id,
        });

        console.log(`Subscription activated for user ${userId} with plan ${planType}`);
        break;
      }

      case "customer.subscription.updated": {
        const subscription = event.data.object;
        console.log("customer.subscription.updated", subscription.id);

        // Find user by Stripe customer ID
        const { data: subscriptionData, error: subError } = await supabaseAdmin
          .from("subscriptions")
          .select("user_id")
          .eq("stripe_subscription_id", subscription.id)
          .single();

        if (subError || !subscriptionData) {
          console.error("Subscription not found:", subscription.id);
          break;
        }

        const userId = subscriptionData.user_id;
        const planType = getPlanTypeFromPriceId(subscription.items.data[0]?.price.id || "");

        // Update subscription status
        await updateUserSubscription(userId, {
          plan_type: planType,
          status: subscription.status,
          current_period_start: new Date(subscription.current_period_start * 1000).toISOString(),
          current_period_end: new Date(subscription.current_period_end * 1000).toISOString(),
        });

        // Update document access based on new plan
        await grantAccessForPlan(userId, planType);

        await trackAnalyticsEvent(userId, "subscription_updated", {
          plan_type: planType,
          status: subscription.status,
        });

        break;
      }

      case "customer.subscription.deleted": {
        const subscription = event.data.object;
        console.log("customer.subscription.deleted", subscription.id);

        // Find user and downgrade to free plan
        const { data: subscriptionData, error: subError } = await supabaseAdmin
          .from("subscriptions")
          .select("user_id")
          .eq("stripe_subscription_id", subscription.id)
          .single();

        if (subError || !subscriptionData) {
          console.error("Subscription not found:", subscription.id);
          break;
        }

        const userId = subscriptionData.user_id;

        // Downgrade to free plan
        await updateUserSubscription(userId, {
          plan_type: "free",
          status: "canceled",
          stripe_subscription_id: undefined,
        });

        await trackAnalyticsEvent(userId, "subscription_canceled", {
          stripe_subscription_id: subscription.id,
        });

        break;
      }

      case "invoice.payment_failed": {
        const invoice = event.data.object;
        console.warn("invoice.payment_failed", invoice.id);

        // Find user by subscription
        const { data: subscriptionData, error: subError } = await supabaseAdmin
          .from("subscriptions")
          .select("user_id")
          .eq("stripe_subscription_id", invoice.subscription)
          .single();

        if (subError || !subscriptionData) {
          console.error("Subscription not found for failed payment:", invoice.subscription);
          break;
        }

        const userId = subscriptionData.user_id;

        await trackAnalyticsEvent(userId, "payment_failed", {
          invoice_id: invoice.id,
          amount: invoice.amount_due,
        });

        break;
      }

      default:
        console.log("Unhandled event:", event.type);
    }
    return new Response(JSON.stringify({ received: true }), { status: 200 });
  } catch (err: any) {
    console.error("Webhook error:", err?.message);
    return new Response(JSON.stringify({ error: err?.message }), { status: 400 });
  }
}

// Helper function to map Stripe price IDs to plan types
function getPlanTypeFromPriceId(
  priceId: string,
): "free" | "starter" | "professional" | "enterprise" {
  // Price ID to plan type mapping using environment variables
  const priceIdToPlan: Record<string, "free" | "starter" | "professional" | "enterprise"> = {
    // Starter tier products
    [process.env.STRIPE_PRICE_VENDOR_PACK_STARTER || ""]: "starter",

    // Professional tier products
    [process.env.STRIPE_PRICE_VENDOR_PACK_PROFESSIONAL || ""]: "professional",
    [process.env.STRIPE_PRICE_BUNDLE_PROFESSIONAL_MONTHLY || ""]: "professional",
    [process.env.STRIPE_PRICE_BUNDLE_PROFESSIONAL_ANNUAL || ""]: "professional",

    // Enterprise tier products
    [process.env.STRIPE_PRICE_BUNDLE_ENTERPRISE_MONTHLY || ""]: "enterprise",
    [process.env.STRIPE_PRICE_BUNDLE_ENTERPRISE_ANNUAL || ""]: "enterprise",
    [process.env.STRIPE_PRICE_ENTERPRISE_MONTHLY || ""]: "enterprise",
    [process.env.STRIPE_PRICE_ENTERPRISE_ANNUAL || ""]: "enterprise",
  };

  return priceIdToPlan[priceId] || "free";
}

// Helper function to grant access based on plan type
async function grantAccessForPlan(userId: string, planType: string) {
  switch (planType) {
    case "starter":
      await grantDocumentAccess(userId, "vendor_pack");
      break;
    case "professional":
      await grantDocumentAccess(userId, "vendor_pack");
      await grantDocumentAccess(userId, "connector_guide");
      await grantDocumentAccess(userId, "evalops_toolkit");
      break;
    case "enterprise":
      await grantDocumentAccess(userId, "vendor_pack");
      await grantDocumentAccess(userId, "connector_guide");
      await grantDocumentAccess(userId, "evalops_toolkit");
      await grantDocumentAccess(userId, "hecvat");
      await grantDocumentAccess(userId, "vpat");
      break;
  }
}
