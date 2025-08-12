export type ProductKey = "vendor-pack" | "vendor-pack-updates" | "connectors" | "evalops";

export const PriceMap: Record<
  ProductKey,
  { priceId?: string; paymentLink?: string; mode: "subscription" | "payment" }
> = {
  "vendor-pack": {
    priceId: process.env.STRIPE_PRICE_VENDOR_PACK_ONE_TIME,
    paymentLink: process.env.NEXT_PUBLIC_PAYMENT_LINK_VENDOR_PACK,
    mode: "payment",
  },
  "vendor-pack-updates": {
    priceId: process.env.STRIPE_PRICE_VENDOR_PACK_UPDATES_MONTHLY,
    paymentLink: process.env.NEXT_PUBLIC_PAYMENT_LINK_VENDOR_PACK_UPDATES,
    mode: "subscription",
  },
  connectors: {
    priceId: process.env.STRIPE_PRICE_CONNECTORS_MONTHLY,
    paymentLink: process.env.NEXT_PUBLIC_PAYMENT_LINK_CONNECTORS,
    mode: "subscription",
  },
  evalops: {
    priceId: process.env.STRIPE_PRICE_EVALOPS_MONTHLY,
    paymentLink: process.env.NEXT_PUBLIC_PAYMENT_LINK_EVALOPS,
    mode: "subscription",
  },
};

export const successUrl =
  process.env.NEXT_PUBLIC_CHECKOUT_SUCCESS_URL || "http://localhost:3000/success";
export const cancelUrl =
  process.env.NEXT_PUBLIC_CHECKOUT_CANCEL_URL || "http://localhost:3000/cancel";
