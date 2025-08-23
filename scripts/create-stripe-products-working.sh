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

# Check if jq is available
if ! command -v jq &> /dev/null; then
    echo "❌ jq is required but not installed. Please install jq first."
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
    product_response=$(stripe products create \
        --name="$name" \
        --description="$description")
    
    product_id=$(echo "$product_response" | jq -r '.id')
    
    echo "  Product ID: $product_id"
    
    # Create price
    if [ "$interval" = "one_time" ]; then
        price_response=$(stripe prices create \
            --product="$product_id" \
            --unit-amount="$amount" \
            --currency=usd)
    else
        price_response=$(stripe prices create \
            --product="$product_id" \
            --unit-amount="$amount" \
            --currency=usd \
            --recurring.interval="$interval")
    fi
    
    price_id=$(echo "$price_response" | jq -r '.id')
    
    echo "  Price ID: $price_id"
    echo "  Environment variable: $env_var=$price_id"
    echo "$env_var=$price_id" >> $ENV_OUTPUT_FILE
    echo ""
}

# Output file for environment variables
ENV_OUTPUT_FILE="new-stripe-env-vars.txt"
echo "# New Stripe Environment Variables" > $ENV_OUTPUT_FILE
echo "# Generated on $(date)" >> $ENV_OUTPUT_FILE
echo "" >> $ENV_OUTPUT_FILE

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
    "Vendor Pack Updates - Monthly" \
    "Keep documents current with regulations - Monthly subscription" \
    14900 \
    "month" \
    "STRIPE_PRICE_VENDOR_PACK_UPDATES_MONTHLY"

create_product_and_price \
    "Vendor Pack Updates - Annual" \
    "Keep documents current with regulations - Annual subscription (2 months free)" \
    149000 \
    "year" \
    "STRIPE_PRICE_VENDOR_PACK_UPDATES_ANNUAL"

# Connectors
echo -e "${GREEN}=== CONNECTORS TIER ===${NC}"

create_product_and_price \
    "Single LMS Connector - Monthly" \
    "One LMS connector for Canvas, Blackboard, or other platforms" \
    19900 \
    "month" \
    "STRIPE_PRICE_CONNECTORS_SINGLE_MONTHLY"

create_product_and_price \
    "All Connectors - Monthly" \
    "All LMS & SharePoint connectors for comprehensive integration" \
    49900 \
    "month" \
    "STRIPE_PRICE_CONNECTORS_ALL_MONTHLY"

create_product_and_price \
    "All Connectors - Annual" \
    "All LMS & SharePoint connectors - Annual subscription (2 months free)" \
    499000 \
    "year" \
    "STRIPE_PRICE_CONNECTORS_ALL_ANNUAL"

# EvalOps
echo -e "${GREEN}=== EVALOPS TIER ===${NC}"

create_product_and_price \
    "EvalOps - Monthly" \
    "LLM evaluation toolkit & CI/CD for AI governance" \
    39900 \
    "month" \
    "STRIPE_PRICE_EVALOPS_MONTHLY"

create_product_and_price \
    "EvalOps - Annual" \
    "LLM evaluation toolkit & CI/CD - Annual subscription (2 months free)" \
    399000 \
    "year" \
    "STRIPE_PRICE_EVALOPS_ANNUAL"

# Professional Bundle
echo -e "${GREEN}=== PROFESSIONAL BUNDLE ===${NC}"

create_product_and_price \
    "Professional Bundle - Monthly" \
    "Professional: Updates + All Connectors + EvalOps" \
    99900 \
    "month" \
    "STRIPE_PRICE_BUNDLE_PROFESSIONAL_MONTHLY"

create_product_and_price \
    "Professional Bundle - Annual" \
    "Professional bundle - Annual subscription (2 months free)" \
    999000 \
    "year" \
    "STRIPE_PRICE_BUNDLE_PROFESSIONAL_ANNUAL"

# Enterprise Bundle
echo -e "${GREEN}=== ENTERPRISE BUNDLE ===${NC}"

create_product_and_price \
    "Enterprise Bundle - Monthly" \
    "Enterprise: Everything + SLAs + Custom Work + Premium Support" \
    199900 \
    "month" \
    "STRIPE_PRICE_BUNDLE_ENTERPRISE_MONTHLY"

create_product_and_price \
    "Enterprise Bundle - Annual" \
    "Enterprise bundle - Annual subscription (2 months free)" \
    1999000 \
    "year" \
    "STRIPE_PRICE_BUNDLE_ENTERPRISE_ANNUAL"

# Enterprise Services
echo -e "${GREEN}=== ENTERPRISE SERVICES ===${NC}"

create_product_and_price \
    "Enterprise Services - Monthly" \
    "Enterprise services add-on: SLAs, questionnaires, Slack, custom endpoints" \
    299900 \
    "month" \
    "STRIPE_PRICE_ENTERPRISE_MONTHLY"

create_product_and_price \
    "Enterprise Services - Annual" \
    "Enterprise services - Annual subscription (2 months free)" \
    2999000 \
    "year" \
    "STRIPE_PRICE_ENTERPRISE_ANNUAL"

echo -e "${GREEN}✅ All products and prices created successfully!${NC}"
echo -e "${BLUE}Environment variables saved to: $ENV_OUTPUT_FILE${NC}"
echo ""
echo "Next steps:"
echo "1. Copy the environment variables from $ENV_OUTPUT_FILE"
echo "2. Update your .env.local file"
echo "3. Update your Vercel environment variables"
echo "4. Configure custom domain in Stripe Dashboard"
