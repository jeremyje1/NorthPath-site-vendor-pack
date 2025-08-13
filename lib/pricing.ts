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

export const PriceMap: Record<
  ProductKey,
  { priceId?: string; paymentLink?: string; mode: "subscription" | "payment" }
> = {
  "vendor-pack": { priceId: process.env.STRIPE_PRICE_VENDOR_PACK_ONE_TIME, mode: "payment" },
  "vendor-pack-updates-monthly": {
    priceId: process.env.STRIPE_PRICE_VENDOR_PACK_UPDATES_MONTHLY,
    mode: "subscription",
  },
  "vendor-pack-updates-annual": {
    priceId: process.env.STRIPE_PRICE_VENDOR_PACK_UPDATES_ANNUAL,
    mode: "subscription",
  },
  "connectors-single-monthly": {
    priceId: process.env.STRIPE_PRICE_CONNECTORS_SINGLE_MONTHLY,
    mode: "subscription",
  },
  "connectors-all-monthly": {
    priceId: process.env.STRIPE_PRICE_CONNECTORS_ALL_MONTHLY,
    mode: "subscription",
  },
  "connectors-all-annual": {
    priceId: process.env.STRIPE_PRICE_CONNECTORS_ALL_ANNUAL,
    mode: "subscription",
  },
  "evalops-monthly": { priceId: process.env.STRIPE_PRICE_EVALOPS_MONTHLY, mode: "subscription" },
  "evalops-annual": { priceId: process.env.STRIPE_PRICE_EVALOPS_ANNUAL, mode: "subscription" },
  "bundle-monthly": { priceId: process.env.STRIPE_PRICE_BUNDLE_MONTHLY, mode: "subscription" },
  "bundle-annual": { priceId: process.env.STRIPE_PRICE_BUNDLE_ANNUAL, mode: "subscription" },
  "enterprise-monthly": {
    priceId: process.env.STRIPE_PRICE_ENTERPRISE_MONTHLY,
    mode: "subscription",
  },
  "enterprise-annual": {
    priceId: process.env.STRIPE_PRICE_ENTERPRISE_ANNUAL,
    mode: "subscription",
  },
};

export const successUrl =
  process.env.NEXT_PUBLIC_CHECKOUT_SUCCESS_URL || "http://localhost:3000/success";
export const cancelUrl =
  process.env.NEXT_PUBLIC_CHECKOUT_CANCEL_URL || "http://localhost:3000/cancel";
