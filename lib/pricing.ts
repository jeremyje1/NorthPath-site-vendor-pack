// Expanded product catalog reflecting strategy (one-time, monthly & annual variants, bundle, enterprise)
export type ProductKey =
  | "vendor-pack"
  | "vendor-pack-updates-monthly"
  | "vendor-pack-updates-annual"
  | "connectors-single-monthly"
  | "connectors-all-monthly"
  | "connectors-all-annual"
  | "evalops-monthly"
  | "evalops-annual"
  | "bundle-monthly"
  | "bundle-annual"
  | "enterprise-monthly"
  | "enterprise-annual";

export interface PriceInfo {
  priceId?: string;
  paymentLink?: string;
  mode: "subscription" | "payment";
  price?: {
    monthly?: number;
    annual?: number;
    oneTime?: number;
  };
  description?: string;
}

export const PriceMap: Record<ProductKey, PriceInfo> = {
  "vendor-pack": {
    priceId: process.env.STRIPE_PRICE_VENDOR_PACK_ONE_TIME,
    mode: "payment",
    price: { oneTime: 149500 }, // $1,495.00
    description: "Complete procurement documentation package",
  },
  "vendor-pack-updates-monthly": {
    priceId: process.env.STRIPE_PRICE_VENDOR_PACK_UPDATES_MONTHLY,
    mode: "subscription",
    price: { monthly: 19900 }, // $199.00/mo
    description: "Keep documents current with regulations",
  },
  "vendor-pack-updates-annual": {
    priceId: process.env.STRIPE_PRICE_VENDOR_PACK_UPDATES_ANNUAL,
    mode: "subscription",
    price: { annual: 199000 }, // $1,990.00/yr (2 months free)
    description: "Annual updates with 2 months free",
  },
  "connectors-single-monthly": {
    priceId: process.env.STRIPE_PRICE_CONNECTORS_SINGLE_MONTHLY,
    mode: "subscription",
    price: { monthly: 29900 }, // $299.00/mo
    description: "One LMS connector",
  },
  "connectors-all-monthly": {
    priceId: process.env.STRIPE_PRICE_CONNECTORS_ALL_MONTHLY,
    mode: "subscription",
    price: { monthly: 69900 }, // $699.00/mo
    description: "All LMS & SharePoint connectors",
  },
  "connectors-all-annual": {
    priceId: process.env.STRIPE_PRICE_CONNECTORS_ALL_ANNUAL,
    mode: "subscription",
    price: { annual: 699000 }, // $6,990.00/yr (2 months free)
    description: "All connectors with 2 months free",
  },
  "evalops-monthly": {
    priceId: process.env.STRIPE_PRICE_EVALOPS_MONTHLY,
    mode: "subscription",
    price: { monthly: 49900 }, // $499.00/mo
    description: "LLM evaluation toolkit & CI/CD",
  },
  "evalops-annual": {
    priceId: process.env.STRIPE_PRICE_EVALOPS_ANNUAL,
    mode: "subscription",
    price: { annual: 499000 }, // $4,990.00/yr (2 months free)
    description: "Annual EvalOps with 2 months free",
  },
  "bundle-monthly": {
    priceId: process.env.STRIPE_PRICE_BUNDLE_MONTHLY,
    mode: "subscription",
    price: { monthly: 149900 }, // $1,499.00/mo
    description: "Complete package - everything included",
  },
  "bundle-annual": {
    priceId: process.env.STRIPE_PRICE_BUNDLE_ANNUAL,
    mode: "subscription",
    price: { annual: 1499000 }, // $14,990.00/yr (2 months free)
    description: "Annual bundle with 2 months free",
  },
  "enterprise-monthly": {
    priceId: process.env.STRIPE_PRICE_ENTERPRISE_MONTHLY,
    mode: "subscription",
    price: { monthly: 299900 }, // $2,999.00/mo
    description: "White-glove service, SLAs, custom work",
  },
  "enterprise-annual": {
    priceId: process.env.STRIPE_PRICE_ENTERPRISE_ANNUAL,
    mode: "subscription",
    price: { annual: 2999000 }, // $29,990.00/yr (2 months free)
    description: "Annual enterprise with 2 months free",
  },
};

export const successUrl =
  process.env.NEXT_PUBLIC_CHECKOUT_SUCCESS_URL || "http://localhost:3000/success";
export const cancelUrl =
  process.env.NEXT_PUBLIC_CHECKOUT_CANCEL_URL || "http://localhost:3000/cancel";

// Utility function to format prices
export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price / 100);
}
