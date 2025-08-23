#!/bin/bash

# Quick Setup - Create Essential Stripe Products
# This creates the most important products for the new pricing structure

set -e

echo "🚀 Creating essential Stripe products for new pricing structure..."

# Check if STRIPE_API_KEY is set
if [ -z "$STRIPE_API_KEY" ]; then
    echo "❌ Please set your Stripe API key first:"
    echo "export STRIPE_API_KEY=sk_live_[YOUR_LIVE_SECRET_KEY_HERE]"
    echo ""
    echo "Replace 'YOUR_LIVE_SECRET_KEY_HERE' with your actual Stripe live secret key"
    echo "Then run this script again."
    exit 1
fi

echo "✅ Stripe API key found, creating products..."

# Create Vendor Pack - Starter ($495)
echo "Creating Vendor Pack - Starter..."
vendor_pack_starter_product=$(stripe products create \
    --name="Vendor Pack - Starter" \
    --description="Essential procurement templates & basic compliance docs for Higher Education sales" \
    --query="id" \
    --output="value")

vendor_pack_starter_price=$(stripe prices create \
    --product="$vendor_pack_starter_product" \
    --unit-amount=49500 \
    --currency=usd \
    --query="id" \
    --output="value")

echo "STRIPE_PRICE_VENDOR_PACK_STARTER=$vendor_pack_starter_price"

# Create Vendor Pack - Professional ($995)
echo "Creating Vendor Pack - Professional..."
vendor_pack_pro_product=$(stripe products create \
    --name="Vendor Pack - Professional" \
    --description="Complete customized procurement package with AI governance mapping for Higher Ed" \
    --query="id" \
    --output="value")

vendor_pack_pro_price=$(stripe prices create \
    --product="$vendor_pack_pro_product" \
    --unit-amount=99500 \
    --currency=usd \
    --query="id" \
    --output="value")

echo "STRIPE_PRICE_VENDOR_PACK_PROFESSIONAL=$vendor_pack_pro_price"

# Create Professional Bundle Monthly ($999/mo)
echo "Creating Professional Bundle (Monthly)..."
bundle_pro_monthly_product=$(stripe products create \
    --name="Go-to-Campus Professional (Monthly)" \
    --description="Professional bundle: Updates + All Connectors + EvalOps - everything for Higher Ed success" \
    --query="id" \
    --output="value")

bundle_pro_monthly_price=$(stripe prices create \
    --product="$bundle_pro_monthly_product" \
    --unit-amount=99900 \
    --currency=usd \
    --recurring="interval=month" \
    --query="id" \
    --output="value")

echo "STRIPE_PRICE_BUNDLE_PROFESSIONAL_MONTHLY=$bundle_pro_monthly_price"

# Create Updates Monthly ($149/mo)
echo "Creating Updates (Monthly)..."
updates_monthly_product=$(stripe products create \
    --name="Vendor Pack Updates (Monthly)" \
    --description="Keep procurement documents current with regulatory changes and policy updates" \
    --query="id" \
    --output="value")

updates_monthly_price=$(stripe prices create \
    --product="$updates_monthly_product" \
    --unit-amount=14900 \
    --currency=usd \
    --recurring="interval=month" \
    --query="id" \
    --output="value")

echo "STRIPE_PRICE_VENDOR_PACK_UPDATES_MONTHLY=$updates_monthly_price"

echo ""
echo "✅ Essential products created! Add these to your environment variables:"
echo ""
echo "STRIPE_PRICE_VENDOR_PACK_STARTER=$vendor_pack_starter_price"
echo "STRIPE_PRICE_VENDOR_PACK_PROFESSIONAL=$vendor_pack_pro_price"
echo "STRIPE_PRICE_BUNDLE_PROFESSIONAL_MONTHLY=$bundle_pro_monthly_price"
echo "STRIPE_PRICE_VENDOR_PACK_UPDATES_MONTHLY=$updates_monthly_price"
echo ""
echo "🔧 Next steps:"
echo "1. Add these environment variables to .env.local"
echo "2. Update your Vercel environment variables"
echo "3. Run the full script for all products: ./scripts/create-new-stripe-prices.sh"
echo "4. Test the checkout flows"
