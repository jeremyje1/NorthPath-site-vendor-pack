import Stripe from 'stripe';

const key = process.env.STRIPE_SECRET_KEY;
if (!key) {
  console.warn('STRIPE_SECRET_KEY not set. Server-side checkout disabled.');
}

export const stripe = key
  ? new Stripe(key, { apiVersion: '2024-06-20' })
  : null;
