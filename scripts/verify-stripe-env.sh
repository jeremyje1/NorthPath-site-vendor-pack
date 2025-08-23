#!/bin/bash
# Verify required Stripe pricing environment variables are present & non-empty

set -e

REQUIRED=(
  STRIPE_SECRET_KEY
  STRIPE_PUBLISHABLE_KEY
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
  NEXT_PUBLIC_CHECKOUT_SUCCESS_URL
  NEXT_PUBLIC_CHECKOUT_CANCEL_URL
)

missing=()
for var in "${REQUIRED[@]}"; do
  val="${!var}"
  if [ -z "$val" ]; then
    missing+=("$var")
  fi
  # flag legacy variables still present
  if [[ "$var" == STRIPE_PRICE_VENDOR_PACK_ONE_TIME ]]; then
    echo "⚠️  Legacy variable still referenced: $var"
  fi
  # quick pattern check for price IDs
  if [[ -n "$val" && "$var" == STRIPE_PRICE_* && ! "$val" =~ ^price_ ]]; then
    echo "❌ $var value does not look like a Stripe price id: $val"
  fi
  if [[ -n "$val" ]]; then
    echo "✅ $var=${val}"
  fi
  if [[ -z "$val" ]]; then
    echo "❌ $var is missing"
  fi
  echo "---"
 done

if [ ${#missing[@]} -gt 0 ]; then
  echo "\n❌ Missing ${#missing[@]} Stripe env vars:" >&2
  for m in "${missing[@]}"; do
    echo "  - $m" >&2
  done
  echo "\nAdd these to your environment (local or Vercel) and re-run." >&2
  exit 1
else
  echo "\n✅ All required Stripe environment variables are set."
fi
