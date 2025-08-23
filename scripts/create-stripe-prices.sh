#!/bin/bash

# Create Stripe Products and Prices for NorthPath Strategies
# Run this after installing Stripe CLI and running 'stripe login'

echo "Creating Stripe products and prices..."

# Vendor Pack (One-time payment)
echo "Creating Vendor Pack..."
VENDOR_PACK_PRODUCT=$(stripe products create \
  --name="Vendor Pack" \
  --description="Complete procurement documentation package - HECVAT, VPAT/ACR, AI governance mapping" \
  --type=service \
  --statement_descriptor="NORTHPATH VENDOR" | jq -r '.id')

VENDOR_PACK_PRICE=$(stripe prices create \
  --product=$VENDOR_PACK_PRODUCT \
  --unit-amount=2999 \
  --currency=usd | jq -r '.id')

echo "STRIPE_PRICE_VENDOR_PACK_ONE_TIME=$VENDOR_PACK_PRICE"

# Vendor Pack Updates (Monthly & Annual)
echo "Creating Vendor Pack Updates..."
UPDATES_PRODUCT=$(stripe products create \
  --name="Vendor Pack Updates" \
  --description="Keep documents current with regulatory changes" \
  --type=service \
  --statement_descriptor="NORTHPATH UPDATE" | jq -r '.id')

UPDATES_MONTHLY=$(stripe prices create \
  --product=$UPDATES_PRODUCT \
  --unit-amount=199 \
  --currency=usd \
  --recurring.interval=month | jq -r '.id')

UPDATES_ANNUAL=$(stripe prices create \
  --product=$UPDATES_PRODUCT \
  --unit-amount=1990 \
  --currency=usd \
  --recurring.interval=year | jq -r '.id')

echo "STRIPE_PRICE_VENDOR_PACK_UPDATES_MONTHLY=$UPDATES_MONTHLY"
echo "STRIPE_PRICE_VENDOR_PACK_UPDATES_ANNUAL=$UPDATES_ANNUAL"

# Connectors
echo "Creating Connector Products..."
CONNECTORS_PRODUCT=$(stripe products create \
  --name="LMS Connectors" \
  --description="Canvas, Banner, SharePoint integration guidance" \
  --type=service \
  --statement_descriptor="NORTHPATH CONN" | jq -r '.id')

CONN_SINGLE_MONTHLY=$(stripe prices create \
  --product=$CONNECTORS_PRODUCT \
  --unit-amount=299 \
  --currency=usd \
  --recurring.interval=month | jq -r '.id')

CONN_ALL_MONTHLY=$(stripe prices create \
  --product=$CONNECTORS_PRODUCT \
  --unit-amount=699 \
  --currency=usd \
  --recurring.interval=month | jq -r '.id')

CONN_ALL_ANNUAL=$(stripe prices create \
  --product=$CONNECTORS_PRODUCT \
  --unit-amount=6990 \
  --currency=usd \
  --recurring.interval=year | jq -r '.id')

echo "STRIPE_PRICE_CONNECTORS_SINGLE_MONTHLY=$CONN_SINGLE_MONTHLY"
echo "STRIPE_PRICE_CONNECTORS_ALL_MONTHLY=$CONN_ALL_MONTHLY"
echo "STRIPE_PRICE_CONNECTORS_ALL_ANNUAL=$CONN_ALL_ANNUAL"

# EvalOps
echo "Creating EvalOps..."
EVALOPS_PRODUCT=$(stripe products create \
  --name="EvalOps Toolkit" \
  --description="LLM evaluation runbooks and quality gates" \
  --type=service \
  --statement_descriptor="NORTHPATH EVAL" | jq -r '.id')

EVALOPS_MONTHLY=$(stripe prices create \
  --product=$EVALOPS_PRODUCT \
  --unit-amount=499 \
  --currency=usd \
  --recurring.interval=month | jq -r '.id')

EVALOPS_ANNUAL=$(stripe prices create \
  --product=$EVALOPS_PRODUCT \
  --unit-amount=4990 \
  --currency=usd \
  --recurring.interval=year | jq -r '.id')

echo "STRIPE_PRICE_EVALOPS_MONTHLY=$EVALOPS_MONTHLY"
echo "STRIPE_PRICE_EVALOPS_ANNUAL=$EVALOPS_ANNUAL"

# Bundle
echo "Creating Bundle..."
BUNDLE_PRODUCT=$(stripe products create \
  --name="Go-to-Campus Bundle" \
  --description="Complete package - Vendor Pack + Updates + All Connectors + EvalOps" \
  --type=service \
  --statement_descriptor="NORTHPATH BUNDLE" | jq -r '.id')

BUNDLE_MONTHLY=$(stripe prices create \
  --product=$BUNDLE_PRODUCT \
  --unit-amount=1299 \
  --currency=usd \
  --recurring.interval=month | jq -r '.id')

BUNDLE_ANNUAL=$(stripe prices create \
  --product=$BUNDLE_PRODUCT \
  --unit-amount=12990 \
  --currency=usd \
  --recurring.interval=year | jq -r '.id')

echo "STRIPE_PRICE_BUNDLE_MONTHLY=$BUNDLE_MONTHLY"
echo "STRIPE_PRICE_BUNDLE_ANNUAL=$BUNDLE_ANNUAL"

# Enterprise
echo "Creating Enterprise..."
ENTERPRISE_PRODUCT=$(stripe products create \
  --name="Enterprise" \
  --description="White-glove service, SLAs, custom work, dedicated Slack" \
  --type=service \
  --statement_descriptor="NORTHPATH ENT" | jq -r '.id')

ENTERPRISE_MONTHLY=$(stripe prices create \
  --product=$ENTERPRISE_PRODUCT \
  --unit-amount=2999 \
  --currency=usd \
  --recurring.interval=month | jq -r '.id')

ENTERPRISE_ANNUAL=$(stripe prices create \
  --product=$ENTERPRISE_PRODUCT \
  --unit-amount=29990 \
  --currency=usd \
  --recurring.interval=year | jq -r '.id')

echo "STRIPE_PRICE_ENTERPRISE_MONTHLY=$ENTERPRISE_MONTHLY"
echo "STRIPE_PRICE_ENTERPRISE_ANNUAL=$ENTERPRISE_ANNUAL"

echo ""
echo "All Stripe products and prices created!"
echo ""
echo "Add these environment variables to your .env.local file:"
echo "STRIPE_PRICE_VENDOR_PACK_ONE_TIME=$VENDOR_PACK_PRICE"
echo "STRIPE_PRICE_VENDOR_PACK_UPDATES_MONTHLY=$UPDATES_MONTHLY"
echo "STRIPE_PRICE_VENDOR_PACK_UPDATES_ANNUAL=$UPDATES_ANNUAL"
echo "STRIPE_PRICE_CONNECTORS_SINGLE_MONTHLY=$CONN_SINGLE_MONTHLY"
echo "STRIPE_PRICE_CONNECTORS_ALL_MONTHLY=$CONN_ALL_MONTHLY"
echo "STRIPE_PRICE_CONNECTORS_ALL_ANNUAL=$CONN_ALL_ANNUAL"
echo "STRIPE_PRICE_EVALOPS_MONTHLY=$EVALOPS_MONTHLY"
echo "STRIPE_PRICE_EVALOPS_ANNUAL=$EVALOPS_ANNUAL"
echo "STRIPE_PRICE_BUNDLE_MONTHLY=$BUNDLE_MONTHLY"
echo "STRIPE_PRICE_BUNDLE_ANNUAL=$BUNDLE_ANNUAL"
echo "STRIPE_PRICE_ENTERPRISE_MONTHLY=$ENTERPRISE_MONTHLY"
echo "STRIPE_PRICE_ENTERPRISE_ANNUAL=$ENTERPRISE_ANNUAL"
