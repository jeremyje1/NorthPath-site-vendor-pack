# Environment Variables Configuration Guide

## 🚀 Quick Setup Checklist

### ✅ Already Configured
- [x] Supabase database and credentials
- [x] Local development template created
- [x] Security measures in place

### 🔄 Next Steps (Choose Your Path)

## Option A: Quick Development Setup (Recommended First)

### 1. Get Your Stripe Test Keys
1. Go to [Stripe Dashboard](https://dashboard.stripe.com/test/apikeys)
2. Copy your **test** keys (they start with `sk_test_` and `pk_test_`)
3. Update `.env.local` with your test keys:

```bash
# Replace these lines in .env.local:
STRIPE_SECRET_KEY=sk_test_[YOUR_ACTUAL_TEST_KEY_HERE]
STRIPE_PUBLISHABLE_KEY=pk_test_[YOUR_ACTUAL_TEST_KEY_HERE]
```

### 2. Create Test Products in Stripe
```bash
# Set your test API key
export STRIPE_API_KEY=sk_test_[YOUR_ACTUAL_TEST_KEY_HERE]

# Create essential products
./scripts/create-essential-products.sh

# Copy the output price IDs to .env.local
```

### 3. Test Locally
```bash
npm run dev
# Visit http://localhost:3000/pricing to test
```

---

## Option B: Full Production Setup

### 1. Create Production Stripe Products
```bash
# Set your LIVE API key (be careful!)
export STRIPE_API_KEY=sk_live_[YOUR_LIVE_SECRET_KEY_HERE]

# Create all products for production
./scripts/create-new-stripe-prices.sh

# Save the output price IDs for Vercel
```

### 2. Configure Vercel Environment Variables

#### Method A: Via Vercel Dashboard
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project → Settings → Environment Variables
3. Add each variable from `vercel-env-vars.template`
4. Replace all placeholder values with actual keys

#### Method B: Via Vercel CLI
```bash
# Install Vercel CLI if needed
npm i -g vercel

# Set environment variables
vercel env add STRIPE_SECRET_KEY
vercel env add STRIPE_PUBLISHABLE_KEY
vercel env add NEXT_PUBLIC_SUPABASE_URL
# ... continue for all variables
```

### 3. Deploy
```bash
git push origin main
# Vercel will auto-deploy with new environment variables
```

---

## 🔧 Configuration Status

### Supabase ✅ Ready
```bash
NEXT_PUBLIC_SUPABASE_URL=https://khjsjpepwycpixwxdjmj.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGci... (configured)
SUPABASE_SERVICE_ROLE_KEY=eyJhbGci... (configured)
```

### Stripe 🔄 Needs Your Keys
```bash
STRIPE_SECRET_KEY=sk_test_OR_sk_live_[YOUR_KEY_HERE]
STRIPE_PUBLISHABLE_KEY=pk_test_OR_pk_live_[YOUR_KEY_HERE]
STRIPE_WEBHOOK_SECRET=whsec_[YOUR_WEBHOOK_SECRET_HERE]
```

### URLs ✅ Ready
```bash
NEXT_PUBLIC_CHECKOUT_SUCCESS_URL=https://platform.campusapproval.com/success
NEXT_PUBLIC_CHECKOUT_CANCEL_URL=https://platform.campusapproval.com/cancel
```

### Price IDs 🔄 Need Creation
- Run Stripe product creation scripts to generate these
- Update webhook mapping after creation

---

## 🚨 Security Reminders

1. **Never commit real keys** - `.env.local` is already in `.gitignore`
2. **Use test keys first** - Develop with `sk_test_` keys
3. **Separate environments** - Test keys for dev, live keys for production
4. **Webhook secrets** - Set up webhooks in Stripe dashboard for production

---

## 🐛 Troubleshooting

### Build Warnings (Expected)
```
STRIPE_SECRET_KEY not set. Server-side checkout disabled.
Missing Supabase environment variables
```
These are normal when environment variables aren't fully configured yet.

### Common Issues
- **"Supabase not initialized"** → Check Supabase environment variables
- **"Stripe not configured"** → Add your Stripe secret key
- **"Payment setup in progress"** → Missing price IDs

---

## 📞 Next Steps

1. **For Development**: Follow Option A with test keys
2. **For Production**: Follow Option B with live keys  
3. **Questions?** Check `SECURITY.md` for best practices

Choose your path and let's get your platform configured! 🚀
