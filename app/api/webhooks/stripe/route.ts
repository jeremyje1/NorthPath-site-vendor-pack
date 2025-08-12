import { headers } from "next/headers";
import { stripe } from "@/lib/stripe";

export const runtime = "nodejs"; // ensure Node runtime (crypto APIs)
export const dynamic = "force-dynamic"; // do not cache

export async function POST(req: Request) {
  if (!stripe) return new Response(JSON.stringify({ ok: true }), { status: 200 });

  const sig = headers().get("stripe-signature");
  const whSecret = process.env.STRIPE_WEBHOOK_SECRET;
  const body = await req.text(); // raw body required

  try {
    const event = whSecret
      ? stripe.webhooks.constructEvent(body, sig!, whSecret)
      : JSON.parse(body);

    switch (event.type) {
      case "checkout.session.completed":
        // TODO: provision files/access, send onboarding email
        console.log("checkout.session.completed", event.data.object.id);
        break;
      case "invoice.payment_failed":
        console.warn("invoice.payment_failed", event.data.object.id);
        break;
      default:
        console.log("Unhandled event:", event.type);
    }
    return new Response(JSON.stringify({ received: true }), { status: 200 });
  } catch (err: any) {
    console.error("Webhook error:", err?.message);
    return new Response(JSON.stringify({ error: err?.message }), { status: 400 });
  }
}
