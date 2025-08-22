import Stripe from "stripe";

const key = process.env.STRIPE_SECRET_KEY;
if (!key) {
  // eslint-disable-next-line no-console
  console.warn("STRIPE_SECRET_KEY not set. Server-side checkout disabled.");
}

// Use library bundled API version (avoid pinning far-future preview versions here).
export const stripe = key ? new Stripe(key) : null;
