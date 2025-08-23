#!/bin/bash

# Update .env.local with new Stripe price IDs
# This script replaces old price IDs with new ones and adds missing variables

ENV_FILE=".env.local"
NEW_VARS_FILE="new-stripe-env-vars.txt"

echo "🔄 Updating $ENV_FILE with new Stripe price IDs..."

# Read the new variables
while IFS='=' read -r key value; do
    # Skip comments and empty lines
    [[ $key =~ ^#.*$ ]] && continue
    [[ -z $key ]] && continue
    
    # Remove any existing line with this key
    sed -i.bak "/^$key=/d" "$ENV_FILE"
    
    # Add the new line
    echo "$key=$value" >> "$ENV_FILE"
    echo "✅ Updated $key"
done < "$NEW_VARS_FILE"

# Clean up backup file created by sed
rm -f "$ENV_FILE.bak"

echo ""
echo "✅ Environment file updated successfully!"
echo "🔍 Running verification..."

# Run verification
./scripts/verify-stripe-env.sh
