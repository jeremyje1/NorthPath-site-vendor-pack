"use client";
import { useState } from "react";
import {
  PriceMap,
  successUrl,
  cancelUrl,
  ProductKey,
  formatPrice,
  type PriceInfo,
} from "@/lib/pricing";
import { logEvent } from "@/lib/analytics";

export default function BuyButtons({ product }: { product: ProductKey }) {
  const [loading, setLoading] = useState(false);
  const entry: PriceInfo = PriceMap[product];

  const hasPaymentLink = !!entry.paymentLink;
  const hasServerPrice = !!entry.priceId;

  // Get display price
  const displayPrice = entry.price
    ? entry.price.oneTime
      ? formatPrice(entry.price.oneTime)
      : entry.price.monthly
        ? `${formatPrice(entry.price.monthly)}/mo`
        : entry.price.annual
          ? `${formatPrice(entry.price.annual)}/yr`
          : null
    : null;

  const handleCheckout = async () => {
    logEvent("checkout_click", { product, mode: entry.mode });
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          priceId: entry.priceId,
          mode: entry.mode,
          successUrl,
          cancelUrl,
        }),
      });
      const data = await res.json();
      if (data.url) {
        logEvent("checkout_session_created", { product, mode: entry.mode });
        window.location.href = data.url;
      } else {
        logEvent("checkout_session_failed", { product, error: data.error });
        alert("Unable to start checkout.");
      }
    } catch (e) {
      console.error(e);
      logEvent("checkout_error", { product, message: (e as any)?.message });
      alert("Error starting checkout.");
    } finally {
      setLoading(false);
    }
  };

  if (hasPaymentLink) {
    return (
      <div className="space-y-2">
        {displayPrice && <div className="text-2xl font-bold">{displayPrice}</div>}
        <a
          onClick={() => logEvent("payment_link_click", { product })}
          href={entry.paymentLink!}
          className="btn btn-primary w-full"
          target="_blank"
          rel="noreferrer"
        >
          Buy Now
        </a>
      </div>
    );
  }

  if (hasServerPrice) {
    return (
      <div className="space-y-2">
        {displayPrice && <div className="text-2xl font-bold">{displayPrice}</div>}
        <button onClick={handleCheckout} className="btn btn-primary w-full" disabled={loading}>
          {loading ? "Starting…" : "Buy with Stripe"}
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {displayPrice && <div className="text-2xl font-bold">{displayPrice}</div>}
      <div className="text-sm text-gray-500 p-2 border rounded">
        Checkout not configured.
        <br />
        <a href="/contact" className="text-blue-600 hover:underline">
          Contact us to purchase
        </a>
      </div>
    </div>
  );
}
