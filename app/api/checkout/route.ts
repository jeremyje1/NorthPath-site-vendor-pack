import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { stripe } from "@/lib/stripe";

const Body = z.object({
  priceId: z.string().min(3),
  mode: z.enum(["payment", "subscription"]),
  successUrl: z.string().url(),
  cancelUrl: z.string().url(),
});

export async function POST(req: NextRequest) {
  if (!stripe) {
    return NextResponse.json({ error: "Stripe not configured" }, { status: 500 });
  }
  try {
    const { priceId, mode, successUrl, cancelUrl } = Body.parse(await req.json());
    const session = await stripe.checkout.sessions.create({
      mode,
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: successUrl,
      cancel_url: cancelUrl,
      automatic_tax: { enabled: true },
      allow_promotion_codes: true,
      payment_method_types: ["card", "us_bank_account"],
      customer_creation: "always",
      subscription_data: mode === "subscription" ? { trial_period_days: 14 } : undefined,
    });
    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error("Checkout error", err);
    return NextResponse.json({ error: err.message || "Unknown error" }, { status: 400 });
  }
}
