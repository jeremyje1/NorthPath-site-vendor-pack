#!/bin/bash

# Add new environment variables to Preview environment

echo "🔄 Adding environment variables to Preview environment..."

# New variables
echo "price_1RzNhqEiucq5DMllS7d1zmUW" | vercel env add STRIPE_PRICE_STARTER_FREE preview
echo "price_1RzNhrEiucq5DMll2K6lvj4s" | vercel env add STRIPE_PRICE_TRIAL_FULL_ACCESS preview
echo "price_1RzNhsEiucq5DMllCNgIYh19" | vercel env add STRIPE_PRICE_VENDOR_PACK_STARTER preview
echo "price_1RzNhtEiucq5DMllEYyugfHb" | vercel env add STRIPE_PRICE_VENDOR_PACK_PROFESSIONAL preview
echo "price_1RzNi3Eiucq5DMllFY8bLjoK" | vercel env add STRIPE_PRICE_BUNDLE_PROFESSIONAL_MONTHLY preview
echo "price_1RzNi4Eiucq5DMllaqv4zfRk" | vercel env add STRIPE_PRICE_BUNDLE_PROFESSIONAL_ANNUAL preview
echo "price_1RzNi5Eiucq5DMllTEnfIDRe" | vercel env add STRIPE_PRICE_BUNDLE_ENTERPRISE_MONTHLY preview
echo "price_1RzNi6Eiucq5DMllrfuu5YeJ" | vercel env add STRIPE_PRICE_BUNDLE_ENTERPRISE_ANNUAL preview

# Update existing variables
echo "price_1RzNhuEiucq5DMlliPhpH93A" | vercel env add STRIPE_PRICE_VENDOR_PACK_UPDATES_MONTHLY preview --force
echo "price_1RzNhwEiucq5DMllaewoxEoe" | vercel env add STRIPE_PRICE_VENDOR_PACK_UPDATES_ANNUAL preview --force
echo "price_1RzNhxEiucq5DMlluIJbZ5kC" | vercel env add STRIPE_PRICE_CONNECTORS_SINGLE_MONTHLY preview --force
echo "price_1RzNhyEiucq5DMllwor61txP" | vercel env add STRIPE_PRICE_CONNECTORS_ALL_MONTHLY preview --force
echo "price_1RzNhzEiucq5DMll5Pj3eRWh" | vercel env add STRIPE_PRICE_CONNECTORS_ALL_ANNUAL preview --force
echo "price_1RzNi0Eiucq5DMllpj1EyOk6" | vercel env add STRIPE_PRICE_EVALOPS_MONTHLY preview --force
echo "price_1RzNi1Eiucq5DMllzgtpghxA" | vercel env add STRIPE_PRICE_EVALOPS_ANNUAL preview --force
echo "price_1RzNi7Eiucq5DMllAEqyaDGQ" | vercel env add STRIPE_PRICE_ENTERPRISE_MONTHLY preview --force
echo "price_1RzNi8Eiucq5DMllcI0qipxc" | vercel env add STRIPE_PRICE_ENTERPRISE_ANNUAL preview --force

echo "✅ All variables added to Preview environment!"
