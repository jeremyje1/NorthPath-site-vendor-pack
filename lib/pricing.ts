// Comprehensive product catalog with freemium, starter, professional, and enterprise tiers
export type ProductKey =
  // Freemium & Trial
  | "starter-free"
  | "trial-full-access"
  // Core Products - Revised Pricing
  | "vendor-pack-starter"
  | "vendor-pack-professional"
  | "vendor-pack-updates-monthly"
  | "vendor-pack-updates-annual"
  // Connectors
  | "connectors-single-monthly"
  | "connectors-all-monthly"
  | "connectors-all-annual"
  // EvalOps
  | "evalops-monthly"
  | "evalops-annual"
  // Bundles
  | "bundle-professional-monthly"
  | "bundle-professional-annual"
  | "bundle-enterprise-monthly"
  | "bundle-enterprise-annual"
  // Enterprise
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
  // Freemium & Trial Tiers
  "starter-free": {
    mode: "subscription",
    price: { monthly: 0 },
    description: "Basic templates & 1 connector - Get started free",
  },
  "trial-full-access": {
    priceId: process.env.STRIPE_PRICE_TRIAL_FULL_ACCESS,
    mode: "subscription",
    price: { monthly: 0 },
    description: "14-day full platform trial",
  },

  // Core Vendor Pack - Restructured Pricing
  "vendor-pack-starter": {
    priceId: process.env.STRIPE_PRICE_VENDOR_PACK_STARTER,
    mode: "payment",
    price: { oneTime: 49500 }, // $495.00 - Lower entry point
    description: "Essential procurement templates & basic compliance docs",
  },
  "vendor-pack-professional": {
    priceId: process.env.STRIPE_PRICE_VENDOR_PACK_PROFESSIONAL,
    mode: "payment",
    price: { oneTime: 99500 }, // $995.00 - Full custom package
    description: "Complete customized procurement package with AI governance",
  },
  "vendor-pack-updates-monthly": {
    priceId: process.env.STRIPE_PRICE_VENDOR_PACK_UPDATES_MONTHLY,
    mode: "subscription",
    price: { monthly: 14900 }, // $149.00/mo - Reduced from $199
    description: "Keep documents current with regulations",
  },
  "vendor-pack-updates-annual": {
    priceId: process.env.STRIPE_PRICE_VENDOR_PACK_UPDATES_ANNUAL,
    mode: "subscription",
    price: { annual: 149000 }, // $1,490.00/yr (2 months free)
    description: "Annual updates with 2 months free",
  },

  // Connectors - Adjusted Pricing
  "connectors-single-monthly": {
    priceId: process.env.STRIPE_PRICE_CONNECTORS_SINGLE_MONTHLY,
    mode: "subscription",
    price: { monthly: 19900 }, // $199.00/mo - Reduced from $299
    description: "One LMS connector",
  },
  "connectors-all-monthly": {
    priceId: process.env.STRIPE_PRICE_CONNECTORS_ALL_MONTHLY,
    mode: "subscription",
    price: { monthly: 49900 }, // $499.00/mo - Reduced from $699
    description: "All LMS & SharePoint connectors",
  },
  "connectors-all-annual": {
    priceId: process.env.STRIPE_PRICE_CONNECTORS_ALL_ANNUAL,
    mode: "subscription",
    price: { annual: 499000 }, // $4,990.00/yr (2 months free)
    description: "All connectors with 2 months free",
  },

  // EvalOps - Adjusted Pricing
  "evalops-monthly": {
    priceId: process.env.STRIPE_PRICE_EVALOPS_MONTHLY,
    mode: "subscription",
    price: { monthly: 39900 }, // $399.00/mo - Reduced from $499
    description: "LLM evaluation toolkit & CI/CD",
  },
  "evalops-annual": {
    priceId: process.env.STRIPE_PRICE_EVALOPS_ANNUAL,
    mode: "subscription",
    price: { annual: 399000 }, // $3,990.00/yr (2 months free)
    description: "Annual EvalOps with 2 months free",
  },

  // Professional Bundle - New Competitive Pricing
  "bundle-professional-monthly": {
    priceId: process.env.STRIPE_PRICE_BUNDLE_PROFESSIONAL_MONTHLY,
    mode: "subscription",
    price: { monthly: 99900 }, // $999.00/mo - Major reduction from $1,499
    description: "Professional: Updates + All Connectors + EvalOps",
  },
  "bundle-professional-annual": {
    priceId: process.env.STRIPE_PRICE_BUNDLE_PROFESSIONAL_ANNUAL,
    mode: "subscription",
    price: { annual: 999000 }, // $9,990.00/yr (2 months free)
    description: "Annual professional bundle with 2 months free",
  },

  // Enterprise Bundle - Premium Tier
  "bundle-enterprise-monthly": {
    priceId: process.env.STRIPE_PRICE_BUNDLE_ENTERPRISE_MONTHLY,
    mode: "subscription",
    price: { monthly: 199900 }, // $1,999.00/mo - Reduced from $2,999
    description: "Enterprise: Everything + SLAs + Custom Work + Support",
  },
  "bundle-enterprise-annual": {
    priceId: process.env.STRIPE_PRICE_BUNDLE_ENTERPRISE_ANNUAL,
    mode: "subscription",
    price: { annual: 1999000 }, // $19,990.00/yr (2 months free)
    description: "Annual enterprise bundle with 2 months free",
  },

  // Enterprise Add-On Services
  "enterprise-monthly": {
    priceId: process.env.STRIPE_PRICE_ENTERPRISE_MONTHLY,
    mode: "subscription",
    price: { monthly: 299900 }, // $2,999.00/mo - White-glove service only
    description: "Enterprise services add-on: SLAs, questionnaires, Slack, custom endpoints",
  },
  "enterprise-annual": {
    priceId: process.env.STRIPE_PRICE_ENTERPRISE_ANNUAL,
    mode: "subscription",
    price: { annual: 2999000 }, // $29,990.00/yr (2 months free)
    description: "Annual enterprise services with 2 months free",
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
