# Vercel Deployment

1. Push repo to GitHub.
2. Import project in Vercel.
3. Add all required env vars from `.env.example` (never commit secrets).
4. Set up a production Stripe webhook endpoint in Stripe dashboard pointing to:
   `https://<your-domain>/api/webhooks/stripe`.
5. Redeploy after updating env vars.
6. Confirm checkout + webhook flow in production using Stripe test mode.
