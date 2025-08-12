'use client';
import { useState } from 'react';
import { PriceMap, successUrl, cancelUrl, ProductKey } from '@/lib/pricing';

export default function BuyButtons({ product }: { product: ProductKey }) {
  const [loading, setLoading] = useState(false);
  const entry = PriceMap[product];

  const hasPaymentLink = !!entry.paymentLink;
  const hasServerPrice = !!entry.priceId;

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          priceId: entry.priceId,
          mode: entry.mode,
          successUrl,
          cancelUrl,
        }),
      });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
      else alert('Unable to start checkout.');
    } catch (e) {
      console.error(e);
      alert('Error starting checkout.');
    } finally {
      setLoading(false);
    }
  };

  if (hasPaymentLink) {
    return (
      <a href={entry.paymentLink!} className="btn btn-primary" target="_blank" rel="noreferrer">
        Buy Now
      </a>
    );
  }

  if (hasServerPrice) {
    return (
      <button onClick={handleCheckout} className="btn btn-primary" disabled={loading}>
        {loading ? 'Starting…' : 'Buy with Stripe'}
      </button>
    );
  }

  return <div className="text-sm text-gray-500">Checkout not configured.</div>;
}
