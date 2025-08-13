"use client";
import { useState } from "react";
import BuyButtons from "@/components/BuyButtons";

export default function PricingClient() {
  const [annual, setAnnual] = useState<boolean>(true);
  return (
    <div className="space-y-10">
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-bold">Pricing</h1>
        <p className="text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
          Fast conversion for small teams. Bundle saves vs a la carte. Annual gets 2 months free.
        </p>
        <div className="flex items-center justify-center gap-4 text-sm">
          <span className={!annual ? "font-semibold" : "opacity-60"}>Monthly</span>
          <button className="btn btn-secondary btn-sm" onClick={() => setAnnual((a) => !a)}>
            {annual ? "Switch to Monthly" : "Switch to Annual (2 months free)"}
          </button>
          <span className={annual ? "font-semibold" : "opacity-60"}>Annual</span>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        <div className="card space-y-3 p-6 border relative">
          <div className="absolute top-2 right-2 text-xs px-2 py-1 bg-indigo-600 text-white rounded">
            Best Value
          </div>
          <h2 className="text-xl font-semibold">Go‑to‑Campus Bundle</h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Vendor Pack + Updates + All Connectors + EvalOps
          </p>
          <BuyButtons product={annual ? "bundle-annual" : "bundle-monthly"} />
          <p className="text-xs text-neutral-500">+ $999 one‑time setup</p>
          <ul className="mt-2 text-xs list-disc list-inside text-neutral-500 space-y-1">
            <li>2 support hours / quarter</li>
            <li>All feature updates</li>
            <li>Annual savings vs separate plans</li>
          </ul>
        </div>
        <div className="card space-y-4 p-6 border">
          <h2 className="text-xl font-semibold">Connectors</h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            All LMS/SharePoint connectors
          </p>
          <BuyButtons product={annual ? "connectors-all-annual" : "connectors-all-monthly"} />
          <div className="text-xs text-neutral-500 space-y-1">
            <p>Or single connector:</p>
            <BuyButtons product="connectors-single-monthly" />
          </div>
        </div>
        <div className="card space-y-4 p-6 border">
          <h2 className="text-xl font-semibold">EvalOps</h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">LLM evals & CI toolkit</p>
          <BuyButtons product={annual ? "evalops-annual" : "evalops-monthly"} />
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        <div className="card space-y-4 p-6 border">
          <h2 className="text-xl font-semibold">Vendor Pack</h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            One‑time procurement docs
          </p>
          <BuyButtons product="vendor-pack" />
          <p className="text-xs text-neutral-500">Add updates below</p>
          <BuyButtons
            product={annual ? "vendor-pack-updates-annual" : "vendor-pack-updates-monthly"}
          />
        </div>
        <div className="card space-y-4 p-6 border">
          <h2 className="text-xl font-semibold">Enterprise</h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            SLAs, questionnaires, Slack, custom endpoints
          </p>
          <BuyButtons product={annual ? "enterprise-annual" : "enterprise-monthly"} />
          <p className="text-xs text-neutral-500">Setup billed separately ($2,500)</p>
          <ul className="mt-2 text-xs list-disc list-inside text-neutral-500 space-y-1">
            <li>3 questionnaires / year</li>
            <li>Next business day support</li>
            <li>2 custom endpoints/reports / year</li>
            <li>Annual HECVAT refresh</li>
          </ul>
        </div>
      </div>
      <div className="prose dark:prose-invert max-w-3xl mx-auto text-sm">
        <h3>What counts as “Updates”?</h3>
        <p>
          Maintained templates, regulation changes, and light Q&A via email (2 business day SLA).
        </p>
        <h3>Support SLAs</h3>
        <ul>
          <li>Standard: 2 business days (email)</li>
          <li>Bundle: 2 business days + 2 hrs/quarter</li>
          <li>Enterprise: next business day, Slack, 6 hrs/quarter</li>
        </ul>
        <h3>Questionnaires</h3>
        <p>
          $600 each (non‑Enterprise) or included in Enterprise (up to 3 per year). Expedite fee
          +$750 for 3‑day turnaround.
        </p>
        <h3>Fair Use</h3>
        <p>Connectors limited to reasonable internal usage; redistribution prohibited.</p>
        <h3>Discounts & Promotions</h3>
        <ul>
          <li>Annual: 2 months free</li>
          <li>Launch: 20% off 3 months (code)</li>
          <li>Early Stage: 10% off (self‑attest)</li>
        </ul>
      </div>
    </div>
  );
}
