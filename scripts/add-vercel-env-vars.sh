#!/bin/bash

# Add new Stripe price IDs to Vercel environment variables
# This script adds the missing environment variables for the new freemium pricing structure

echo "🚀 Adding new Stripe price IDs to Vercel..."

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to add environment variable to Vercel
add_vercel_env() {
    local var_name="$1"
    local var_value="$2"
    
    echo -e "${YELLOW}Adding: ${var_name}${NC}"
    
    # Add to production environment
    echo "$var_value" | vercel env add "$var_name" production
    
    # Add to preview environment  
    echo "$var_value" | vercel env add "$var_name" preview
    
    echo "✅ Added $var_name to production and preview"
    echo ""
}

echo -e "${BLUE}Adding new freemium tier price IDs...${NC}\n"

# Freemium & Trial Price IDs (NEW)
add_vercel_env "STRIPE_PRICE_STARTER_FREE" "price_1RzNhqEiucq5DMllS7d1zmUW"
add_vercel_env "STRIPE_PRICE_TRIAL_FULL_ACCESS" "price_1RzNhrEiucq5DMll2K6lvj4s"

# New Vendor Pack Price IDs (replacing old ones)
add_vercel_env "STRIPE_PRICE_VENDOR_PACK_STARTER" "price_1RzNhsEiucq5DMllCNgIYh19"
add_vercel_env "STRIPE_PRICE_VENDOR_PACK_PROFESSIONAL" "price_1RzNhtEiucq5DMllEYyugfHb"

# Bundle Price IDs (updating with new names)
add_vercel_env "STRIPE_PRICE_BUNDLE_PROFESSIONAL_MONTHLY" "price_1RzNi3Eiucq5DMllFY8bLjoK"
add_vercel_env "STRIPE_PRICE_BUNDLE_PROFESSIONAL_ANNUAL" "price_1RzNi4Eiucq5DMllaqv4zfRk"
add_vercel_env "STRIPE_PRICE_BUNDLE_ENTERPRISE_MONTHLY" "price_1RzNi5Eiucq5DMllTEnfIDRe"
add_vercel_env "STRIPE_PRICE_BUNDLE_ENTERPRISE_ANNUAL" "price_1RzNi6Eiucq5DMllrfuu5YeJ"

echo -e "${GREEN}✅ All new environment variables added to Vercel!${NC}"
echo ""
echo "Next steps:"
echo "1. Update existing price IDs if needed"
echo "2. Remove old/unused price IDs"
echo "3. Trigger a new deployment"
echo ""
echo "Run 'vercel env ls' to verify all variables are present."
