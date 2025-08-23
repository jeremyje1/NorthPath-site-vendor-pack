#!/bin/bash

# Create New Stripe Products and Prices for Restructured Pricing
# Run this script to create all the new products and prices in Stripe

set -e

echo "🚀 Creating new Stripe products and prices..."

# Check if STRIPE_API_KEY is set
if [ -z "$STRIPE_API_KEY" ]; then
    echo "❌ STRIPE_API_KEY environment variable is required"
    echo "Set it with: export STRIPE_API_KEY=your_stripe_secret_key"
    exit 1
fi

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}Creating products and prices for NorthPath Strategies platform...${NC}\n"

# Function to create product and price
create_product_and_price() {
    local name="$1"
    local description="$2"
    local amount="$3"
    local interval="$4"
    local env_var="$5"

    echo -e "${YELLOW}Creating: ${name}${NC}"
    
    # Create product
    product_id=$(stripe products create \
        --name="$name" \
        --description="$description" \
        --query="id" \
        --output="value")
    
    echo "  Product ID: $product_id"
    
    # Create price
    if [ "$interval" = "one_time" ]; then
        price_id=$(stripe prices create \
            --product="$product_id" \
            --unit-amount="$amount" \
            --currency=usd \
            --query="id" \
            --output="value")
    else
        price_id=$(stripe prices create \
            --product="$product_id" \
            --unit-amount="$amount" \
            --currency=usd \
            --recurring="interval=$interval" \
            --query="id" \
            --output="value")
    fi
    
    echo "  Price ID: $price_id"
    echo "  Environment variable: $env_var=$price_id"
    echo ""
}

# Freemium & Trial Products
echo -e "${GREEN}=== FREEMIUM & TRIAL TIER ===${NC}"

create_product_and_price \
    "NorthPath Starter (Free)" \
    "Basic templates & 1 connector - Get started free with essential Higher Ed procurement tools" \
    0 \
    "month" \
    "STRIPE_PRICE_STARTER_FREE"

create_product_and_price \
    "NorthPath Full Access Trial" \
    "14-day full platform trial - Complete access to all features and documentation" \
    0 \
    "month" \
    "STRIPE_PRICE_TRIAL_FULL_ACCESS"

# Core Vendor Pack Products - Restructured
echo -e "${GREEN}=== VENDOR PACK TIER ===${NC}"

create_product_and_price \
    "Vendor Pack - Starter" \
    "Essential procurement templates & basic compliance docs for Higher Education sales" \
    49500 \
    "one_time" \
    "STRIPE_PRICE_VENDOR_PACK_STARTER"

create_product_and_price \
    "Vendor Pack - Professional" \
    "Complete customized procurement package with AI governance mapping for Higher Ed" \
    99500 \
    "one_time" \
    "STRIPE_PRICE_VENDOR_PACK_PROFESSIONAL"

create_product_and_price \
    "Vendor Pack Updates (Monthly)" \
    "Keep procurement documents current with regulatory changes and policy updates" \
    14900 \
    "month" \
    "STRIPE_PRICE_VENDOR_PACK_UPDATES_MONTHLY"

create_product_and_price \
    "Vendor Pack Updates (Annual)" \
    "Annual document updates with 2 months free - regulatory compliance maintenance" \
    149000 \
    "year" \
    "STRIPE_PRICE_VENDOR_PACK_UPDATES_ANNUAL"

# Connector Products
echo -e "${GREEN}=== LMS CONNECTORS ===${NC}"

create_product_and_price \
    "Single LMS Connector" \
    "One LMS connector (Canvas, Banner, or SharePoint) with integration guidance" \
    19900 \
    "month" \
    "STRIPE_PRICE_CONNECTORS_SINGLE_MONTHLY"

create_product_and_price \
    "All LMS Connectors (Monthly)" \
    "All LMS & SharePoint connectors with comprehensive integration support" \
    49900 \
    "month" \
    "STRIPE_PRICE_CONNECTORS_ALL_MONTHLY"

create_product_and_price \
    "All LMS Connectors (Annual)" \
    "All connectors with 2 months free - annual LMS integration package" \
    499000 \
    "year" \
    "STRIPE_PRICE_CONNECTORS_ALL_ANNUAL"

# EvalOps Products
echo -e "${GREEN}=== EVALOPS TOOLKIT ===${NC}"

create_product_and_price \
    "EvalOps Toolkit (Monthly)" \
    "LLM evaluation runbooks, quality gates, and CI/CD integration for AI governance" \
    39900 \
    "month" \
    "STRIPE_PRICE_EVALOPS_MONTHLY"

create_product_and_price \
    "EvalOps Toolkit (Annual)" \
    "Annual EvalOps toolkit with 2 months free - comprehensive AI evaluation platform" \
    399000 \
    "year" \
    "STRIPE_PRICE_EVALOPS_ANNUAL"

# Bundle Products - Professional Tier
echo -e "${GREEN}=== PROFESSIONAL BUNDLE ===${NC}"

create_product_and_price \
    "Go-to-Campus Professional (Monthly)" \
    "Professional bundle: Updates + All Connectors + EvalOps - everything for Higher Ed success" \
    99900 \
    "month" \
    "STRIPE_PRICE_BUNDLE_PROFESSIONAL_MONTHLY"

create_product_and_price \
    "Go-to-Campus Professional (Annual)" \
    "Annual professional bundle with 2 months free - complete Higher Ed sales acceleration" \
    999000 \
    "year" \
    "STRIPE_PRICE_BUNDLE_PROFESSIONAL_ANNUAL"

# Bundle Products - Enterprise Tier
echo -e "${GREEN}=== ENTERPRISE BUNDLE ===${NC}"

create_product_and_price \
    "Go-to-Campus Enterprise (Monthly)" \
    "Enterprise bundle: Everything + SLAs + Custom Work + Priority Support" \
    199900 \
    "month" \
    "STRIPE_PRICE_BUNDLE_ENTERPRISE_MONTHLY"

create_product_and_price \
    "Go-to-Campus Enterprise (Annual)" \
    "Annual enterprise bundle with 2 months free - white-glove Higher Ed procurement service" \
    1999000 \
    "year" \
    "STRIPE_PRICE_BUNDLE_ENTERPRISE_ANNUAL"

# Enterprise Services Add-On
echo -e "${GREEN}=== ENTERPRISE SERVICES ===${NC}"

create_product_and_price \
    "Enterprise Services Add-On (Monthly)" \
    "Enterprise services: SLAs, questionnaire completion, Slack support, custom endpoints" \
    299900 \
    "month" \
    "STRIPE_PRICE_ENTERPRISE_MONTHLY"

create_product_and_price \
    "Enterprise Services Add-On (Annual)" \
    "Annual enterprise services with 2 months free - premium white-glove support" \
    2999000 \
    "year" \
    "STRIPE_PRICE_ENTERPRISE_ANNUAL"

echo -e "${GREEN}✅ All products and prices created successfully!${NC}"
echo ""
echo -e "${BLUE}Next steps:${NC}"
echo "1. Copy the environment variables above to your .env files"
echo "2. Update your Vercel environment variables"
echo "3. Test the checkout flows"
echo "4. Deploy the updated pricing page"
echo ""
echo -e "${YELLOW}💡 Remember to update your environment variables in:${NC}"
echo "   - .env.local (for development)"
echo "   - Vercel dashboard (for production)"
