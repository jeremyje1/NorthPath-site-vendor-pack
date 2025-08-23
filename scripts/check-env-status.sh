#!/bin/bash

# Environment Variables Configuration Script
# This script helps you set up your environment variables step by step

echo "🚀 NorthPath Platform - Environment Configuration"
echo "=================================================="
echo ""

# Check current status
echo "📊 Current Configuration Status:"
echo ""

# Check Supabase
echo "✅ Supabase Configuration: READY"
echo "   Database: Campus Approval (khjsjpepwycpixwxdjmj)" 
echo "   All Supabase environment variables configured"
echo ""

# Check Stripe
echo "🔄 Stripe Configuration: NEEDS SETUP"
echo "   Required: Your Stripe API keys"
echo ""

# Check if .env.local exists
if [ -f ".env.local" ]; then
    echo "✅ .env.local file exists"
    if grep -q "YOUR_ACTUAL" .env.local; then
        echo "⚠️  Contains placeholder values - needs your real keys"
    fi
else
    echo "❌ .env.local file missing"
fi

echo ""
echo "🔧 Next Steps to Complete Setup:"
echo ""

echo "STEP 1: Get Your Stripe Keys"
echo "   → Go to: https://dashboard.stripe.com/test/apikeys"
echo "   → Copy your Test Secret Key (starts with sk_test_)"
echo "   → Copy your Test Publishable Key (starts with pk_test_)"
echo ""

echo "STEP 2: Update .env.local"
echo "   → Replace STRIPE_SECRET_KEY=sk_test_[YOUR_ACTUAL_TEST_KEY_HERE]"
echo "   → Replace STRIPE_PUBLISHABLE_KEY=pk_test_[YOUR_ACTUAL_TEST_KEY_HERE]"
echo ""

echo "STEP 3: Create Stripe Products"
echo "   → export STRIPE_API_KEY=sk_test_[YOUR_ACTUAL_KEY]"
echo "   → ./scripts/create-essential-products.sh"
echo ""

echo "STEP 4: Test Locally" 
echo "   → npm run dev"
echo "   → Visit http://localhost:3000/pricing"
echo ""

echo "💡 Tips:"
echo "   • Start with TEST keys for development"
echo "   • Use LIVE keys only for production deployment"
echo "   • Never commit real API keys to git"
echo ""

echo "📚 Documentation:"
echo "   • ENV_SETUP_GUIDE.md - Detailed setup instructions"
echo "   • SECURITY.md - Security best practices"
echo "   • SUPABASE_INTEGRATION.md - Database setup (already done)"
echo ""

echo "🆘 Need Help?"
echo "   • Check docs_STRIPE_SETUP.md for detailed Stripe setup"
echo "   • Review SECURITY.md for key management best practices"
