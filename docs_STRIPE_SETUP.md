# Stripe Setup (Freemium + New Pricing Structure) - ✅ COMPLETED

## 🎉 Status: MAJOR TASKS COMPLETED

### ✅ What's Been Done:
1. **Stripe Products Created**: All 17 products and prices created in live Stripe account
2. **Local Environment Updated**: `.env.local` updated with new price IDs
3. **Code Updated**: `lib/pricing.ts` updated with freemium structure
4. **Build Verified**: Application builds successfully with new configuration

### 🔄 Remaining Steps:
1. **Update Vercel Environment Variables** (use `vercel-env-vars.txt`)
2. **Configure Stripe Dashboard Domain Settings**
3. **Test checkout flows**

---

This guide completes the outstanding items: creating new products, updating environment variables (local + Vercel), and ensuring Stripe Checkout uses your custom domain.

---
## 1. Prerequisites

Install Stripe CLI & login:
```bash
brew install stripe/stripe-cli/stripe
stripe login
```

Confirm you are in the correct Stripe mode (LIVE) for production product creation.

---
## 2. Environment Variable Overview

All price IDs live in environment variables consumed by `lib/pricing.ts`:

```
STRIPE_PRICE_STARTER_FREE
STRIPE_PRICE_TRIAL_FULL_ACCESS
STRIPE_PRICE_VENDOR_PACK_STARTER
STRIPE_PRICE_VENDOR_PACK_PROFESSIONAL
STRIPE_PRICE_VENDOR_PACK_UPDATES_MONTHLY
STRIPE_PRICE_VENDOR_PACK_UPDATES_ANNUAL
STRIPE_PRICE_CONNECTORS_SINGLE_MONTHLY
STRIPE_PRICE_CONNECTORS_ALL_MONTHLY
STRIPE_PRICE_CONNECTORS_ALL_ANNUAL
STRIPE_PRICE_EVALOPS_MONTHLY
STRIPE_PRICE_EVALOPS_ANNUAL
STRIPE_PRICE_BUNDLE_PROFESSIONAL_MONTHLY
STRIPE_PRICE_BUNDLE_PROFESSIONAL_ANNUAL
STRIPE_PRICE_BUNDLE_ENTERPRISE_MONTHLY
STRIPE_PRICE_BUNDLE_ENTERPRISE_ANNUAL
STRIPE_PRICE_ENTERPRISE_MONTHLY
STRIPE_PRICE_ENTERPRISE_ANNUAL
```

Legacy variables (e.g. `STRIPE_PRICE_VENDOR_PACK_ONE_TIME`, `STRIPE_PRICE_BUNDLE_MONTHLY`) can be removed once migration is complete—code no longer references them.

Success / cancel URLs:
```
NEXT_PUBLIC_CHECKOUT_SUCCESS_URL=https://platform.campusapproval.com/success
NEXT_PUBLIC_CHECKOUT_CANCEL_URL=https://platform.campusapproval.com/cancel
```

---
## 3. Create Stripe Products & Prices

### Option A: Quick Essential Products First
Creates core one-time + key subscription price IDs.
```bash
export STRIPE_API_KEY=sk_live_YOUR_LIVE_SECRET_KEY_HERE   # Replace with your actual live key
./scripts/create-essential-products.sh
```
Copy the echoed `STRIPE_PRICE_...` values into `.env.local` (or `.env.production` if you use one) and Vercel dashboard.

### Option B: Full Catalog
Creates every product & price variable.
```bash
export STRIPE_API_KEY=sk_live_YOUR_LIVE_SECRET_KEY_HERE   # Replace with your actual live key
./scripts/create-new-stripe-prices.sh
```
Append all emitted env var lines to `.env.local` and Vercel.

---
## 4. Final Setup Steps

### ✅ Environment Variables Updated

**Local Development**: ✅ COMPLETED
- All new price IDs have been added to `.env.local`
- Environment verified with `./scripts/verify-stripe-env.sh`

**Vercel Production**: 🔄 NEXT STEP
1. Go to [Vercel Dashboard](https://vercel.com/dashboard) → Your Project → Settings → Environment Variables
2. Copy variables from `vercel-env-vars.template` file (replace placeholder values with actual keys)
3. Add/update each environment variable:
   - All `STRIPE_PRICE_*` variables with new price IDs
   - Verify `STRIPE_SECRET_KEY` and `STRIPE_PUBLISHABLE_KEY` are set
   - Verify `NEXT_PUBLIC_CHECKOUT_*_URL` variables are set
4. Trigger a new deployment

---
## 5. Update Vercel Environment Variables

In Vercel Dashboard → Project → Settings → Environment Variables:
1. Add / update each `STRIPE_PRICE_...` variable with the LIVE price IDs.
2. Ensure `STRIPE_SECRET_KEY`, `STRIPE_PUBLISHABLE_KEY`, `STRIPE_WEBHOOK_SECRET` are set.
3. Set (or confirm) `NEXT_PUBLIC_CHECKOUT_SUCCESS_URL` & `NEXT_PUBLIC_CHECKOUT_CANCEL_URL` use your custom domain (`https://platform.campusapproval.com/...`).
4. Redeploy (trigger by pushing a commit or clicking *Redeploy*).

---
## 6. Configure Stripe Checkout Domain & Branding

In the Stripe Dashboard:
1. Settings → Branding: Set logo, brand color, accent color.
2. Settings → Checkout & Payment Links:
   - Add `platform.campusapproval.com` to allowed domains / redirect URLs.
   - (Optional) Enable tax & promotion codes (we already pass `allow_promotion_codes: true`).
3. Test a real (low-value) product purchase after deployment.

Trial note: `subscription_data.trial_period_days = 14` is automatically applied for subscription mode in `/api/checkout`.

---
## 7. Webhooks (Optional / Recommended)

For local development:
```bash
stripe listen --forward-to localhost:3000/api/webhooks/stripe
```

Add the displayed signing secret to `STRIPE_WEBHOOK_SECRET` locally. In production, set the production webhook endpoint in the Stripe Dashboard and copy its secret to Vercel.

---
## 8. Test Matrix

| Scenario | Expectation |
|----------|-------------|
| Free tier button (starter-free) | Redirects to portal (no checkout) |
| Trial (full-access) | Creates subscription session at $0 w/ 14‑day trial |
| One-time Vendor Pack | Stripe Checkout payment mode (no trial) |
| Subscription (monthly) | Stripe Checkout subscription mode + tax + promo codes |
| Cancel flow | Redirects to cancel URL (env var) |
| Success flow | Redirects to success page with session complete |

---
## 9. Verifying Configuration

Run the helper script:
```bash
./scripts/verify-stripe-env.sh
```
Any missing or blank variables should be filled before going live.

---
## 10. Deploy

```bash
git add .
git commit -m "Configure Stripe products & env vars"
git push origin main
```
Wait for Vercel build → Test production pricing page → Perform a $0 trial & a low-risk purchase.

---
## 11. Maintenance Tips

- When changing a price: create a NEW Stripe price; never mutate existing live prices (keeps historical invoices intact).
- Keep `docs_STRIPE_SETUP.md` updated when you add a new product key to `lib/pricing.ts`.
- Consider adding automated health checks (future enhancement) calling a small internal API that validates each configured `priceId` exists via Stripe API.

---
## 12. Troubleshooting

| Issue | Cause | Fix |
|-------|-------|-----|
| Checkout button shows "Payment Setup In Progress" | Missing `priceId` env var | Add price ID & redeploy |
| 500 Stripe not configured | `STRIPE_SECRET_KEY` unset | Set key locally / Vercel |
| Wrong redirect domain | Success/cancel vars not updated | Update env & redeploy |
| Trial not applied | Using payment (one_time) mode | Trial only on subscription products |

---
## 13. Security

Never commit live secret keys. `.env.local` is ignored by git (verify in `.gitignore`). Rotate keys if accidentally exposed.

---
Happy shipping.

