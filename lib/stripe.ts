import Stripe from "stripe";

const key = process.env.STRIPE_SECRET_KEY;
if (!key) {
  console.warn("STRIPE_SECRET_KEY not set. Server-side checkout disabled.");
}

// Using the currently supported API version exposed by the installed stripe SDK types.
// If you need to pin to a different version, update the stripe package version or adjust this string accordingly.
export const stripe = key ? new Stripe(key, { apiVersion: "2025-07-30.basil" }) : null;
