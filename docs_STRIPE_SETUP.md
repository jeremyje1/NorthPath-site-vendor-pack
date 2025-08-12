# Stripe Setup

1. Copy `.env.example` to `.env.local` and fill STRIPE\_\* vars.
2. Install Stripe CLI and login: `stripe login`.
3. Start webhook forwarding during local dev:
   ```bash
   stripe listen --forward-to localhost:3000/api/webhooks/stripe
   ```
4. Use one-time prices or subscriptions defined in your Stripe Dashboard and update env vars.
5. Test a checkout session via UI buy buttons.
6. View events in Stripe dashboard or CLI output.
