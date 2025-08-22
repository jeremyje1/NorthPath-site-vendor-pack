## NorthPath Vendor Pack / Connectors / EvalOps Site

Marketing & checkout site for product bundles. Includes:

- Pricing matrix & checkout (Stripe hosted Checkout Sessions)
- Enterprise quote request capture
- Lightweight analytics event logging placeholder
- Stripe webhook handler (provisioning TODOs inline)

## Tech Stack

- Next.js App Router (v14)
- TypeScript, Tailwind CSS
- Stripe SDK (Checkout + Webhooks)
- Zod for request validation

## 1. Setup

Copy env template and fill real values (never commit secrets):

```bash
cp .env.example .env.local
```

Set Stripe test keys + price IDs. Create Prices in the Stripe Dashboard first.

## 2. Local Development

```bash
npm install
npm run dev
```

Start Stripe webhook forwarding in another shell:

```bash
stripe listen --forward-to localhost:3000/api/webhooks/stripe
```

Open http://localhost:3000

## 3. Checkout Flow

Buy buttons call internal `/api/checkout` which creates a Checkout Session. Configure:

- One‑time purchase (`vendor-pack`)
- Multiple subscription SKU variants (monthly/annual)
  Trial days: 14 (adjust in `app/api/checkout/route.ts`).

## 4. Webhooks

`/api/webhooks/stripe` validates events using `STRIPE_WEBHOOK_SECRET` if present. Add provisioning logic for `checkout.session.completed` inside the switch.

## 5. Enterprise Quotes

`/api/enterprise-quote` currently just logs the payload. Replace with email / CRM integration.

## 6. Health Check

`/api/health` returns `{ ok: true }` for uptime monitors.

## 7. Deployment (Vercel)

1. Push to GitHub
2. Import repo in Vercel
3. Add all env vars from `.env.example`
4. In Stripe Dashboard add production webhook endpoint -> `https://<domain>/api/webhooks/stripe`
5. Redeploy after updates

## 8. Security Hardening

Custom security headers applied in `next.config.mjs` (frame, referrer, MIME, permissions). Add a CSP if/when hosting static 3rd‑party assets.

## 9. Future Enhancements (Ideas)

- Persist enterprise quote requests (DB + email)
- Replace analytics stub with PostHog/Segment
- Add basic auth rate limiting middleware
- Implement license / provisioning service on successful checkout

## 10. Scripts

```bash
npm run dev      # local dev
npm run build    # production build
npm run start    # run built app
npm run lint     # lint
npm run format   # apply prettier
```

---

See `docs_STRIPE_SETUP.md` and `docs_VERCEL_DEPLOY.md` for more detail. For production hardening, also review `LIVE_MODE_STATUS.md`.
