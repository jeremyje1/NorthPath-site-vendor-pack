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
          Start free, scale with your success. Designed for Higher Education sales acceleration with
          transparent, value-based pricing.
        </p>
        <div className="flex items-center justify-center gap-4 text-sm">
          <span className={!annual ? "font-semibold" : "opacity-60"}>Monthly</span>
          <button className="btn btn-secondary btn-sm" onClick={() => setAnnual((a) => !a)}>
            {annual ? "Switch to Monthly" : "Switch to Annual (2 months free)"}
          </button>
          <span className={annual ? "font-semibold" : "opacity-60"}>Annual</span>
        </div>
      </div>

      {/* Freemium & Trial Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-8 border border-blue-200 dark:border-blue-800">
        <h2 className="text-2xl font-bold text-center mb-6">Get Started Free</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="card space-y-4 p-6 border bg-white dark:bg-gray-800">
            <div className="flex items-center gap-2">
              <span className="text-xs px-2 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 rounded font-medium">
                FREE
              </span>
              <h3 className="text-xl font-semibold">Starter</h3>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Basic templates & 1 connector to get you started
            </p>
            <BuyButtons product="starter-free" />
            <ul className="text-xs text-neutral-500 space-y-1">
              <li>✓ Generic HECVAT template</li>
              <li>✓ Basic VPAT scaffold</li>
              <li>✓ 1 LMS connector</li>
              <li>✓ Email support</li>
              <li>✗ No AI governance mapping</li>
              <li>✗ No document updates</li>
            </ul>
          </div>
          <div className="card space-y-4 p-6 border bg-white dark:bg-gray-800 relative">
            <div className="absolute top-2 right-2 text-xs px-2 py-1 bg-blue-600 text-white rounded">
              Trial
            </div>
            <h3 className="text-xl font-semibold">14-Day Full Access</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Try everything - complete platform access
            </p>
            <BuyButtons product="trial-full-access" />
            <ul className="text-xs text-neutral-500 space-y-1">
              <li>✓ Full platform access</li>
              <li>✓ All features unlocked</li>
              <li>✓ Complete documentation</li>
              <li>✓ Priority support</li>
              <li>✓ Custom AI governance</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Main Pricing Tiers */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Professional Bundle - Most Popular */}
        <div className="card space-y-4 p-6 border relative order-2 lg:order-1">
          <div className="absolute top-2 right-2 text-xs px-2 py-1 bg-indigo-600 text-white rounded">
            Most Popular
          </div>
          <h2 className="text-xl font-semibold">Professional Bundle</h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Updates + All Connectors + EvalOps
          </p>
          <BuyButtons
            product={annual ? "bundle-professional-annual" : "bundle-professional-monthly"}
          />
          <ul className="mt-2 text-xs list-disc list-inside text-neutral-500 space-y-1">
            <li>Complete LMS connector library</li>
            <li>EvalOps toolkit included</li>
            <li>Regular document updates</li>
            <li>2 support hours / quarter</li>
            <li>All feature updates</li>
          </ul>
        </div>

        {/* Enterprise Bundle */}
        <div className="card space-y-4 p-6 border relative order-3 lg:order-2 border-yellow-200 dark:border-yellow-800 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20">
          <div className="absolute top-2 right-2 text-xs px-2 py-1 bg-yellow-600 text-white rounded">
            Premium
          </div>
          <h2 className="text-xl font-semibold">Enterprise Bundle</h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Everything + SLAs + Custom Work + Priority Support
          </p>
          <BuyButtons product={annual ? "bundle-enterprise-annual" : "bundle-enterprise-monthly"} />
          <ul className="mt-2 text-xs list-disc list-inside text-neutral-500 space-y-1">
            <li>All Professional features</li>
            <li>3 questionnaire completions/year</li>
            <li>Next business day support</li>
            <li>2 custom endpoints/reports/year</li>
            <li>Annual HECVAT refresh</li>
            <li>Dedicated Slack channel</li>
          </ul>
        </div>

        {/* Individual Components */}
        <div className="space-y-4 order-1 lg:order-3">
          <h3 className="font-semibold text-lg">Individual Components</h3>

          <div className="card space-y-3 p-4 border">
            <h4 className="font-medium">Vendor Pack</h4>
            <div className="space-y-2">
              <div>
                <p className="text-xs text-neutral-600 dark:text-neutral-400">Starter</p>
                <BuyButtons product="vendor-pack-starter" />
              </div>
              <div>
                <p className="text-xs text-neutral-600 dark:text-neutral-400">Professional</p>
                <BuyButtons product="vendor-pack-professional" />
              </div>
              <div>
                <p className="text-xs text-neutral-600 dark:text-neutral-400">Updates</p>
                <BuyButtons
                  product={annual ? "vendor-pack-updates-annual" : "vendor-pack-updates-monthly"}
                />
              </div>
            </div>
          </div>

          <div className="card space-y-3 p-4 border">
            <h4 className="font-medium">Connectors</h4>
            <div className="space-y-2">
              <div>
                <p className="text-xs text-neutral-600 dark:text-neutral-400">Single LMS</p>
                <BuyButtons product="connectors-single-monthly" />
              </div>
              <div>
                <p className="text-xs text-neutral-600 dark:text-neutral-400">All Connectors</p>
                <BuyButtons product={annual ? "connectors-all-annual" : "connectors-all-monthly"} />
              </div>
            </div>
          </div>

          <div className="card space-y-3 p-4 border">
            <h4 className="font-medium">EvalOps</h4>
            <BuyButtons product={annual ? "evalops-annual" : "evalops-monthly"} />
          </div>
        </div>
      </div>

      {/* Enterprise Services Add-On */}
      <div className="card space-y-4 p-6 border-2 border-dashed border-gray-300 dark:border-gray-600">
        <h2 className="text-xl font-semibold">Enterprise Services Add-On</h2>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Add white-glove service to any plan: SLAs, questionnaire completion, Slack support, custom
          endpoints
        </p>
        <BuyButtons product={annual ? "enterprise-annual" : "enterprise-monthly"} />
        <p className="text-xs text-neutral-500">Can be added to any existing subscription</p>
      </div>

      {/* FAQ and Details */}
      <div className="prose dark:prose-invert max-w-3xl mx-auto text-sm">
        <h3>Frequently Asked Questions</h3>

        <h4>What&apos;s included in the Free Starter tier?</h4>
        <p>
          Basic templates (generic HECVAT, VPAT scaffold), 1 LMS connector, and email support.
          Perfect for testing our approach before committing.
        </p>

        <h4>How does the 14-day trial work?</h4>
        <p>
          Full platform access for 14 days. No credit card required to start. Experience the
          complete value before deciding on a paid plan.
        </p>

        <h4>What counts as &quot;Updates&quot;?</h4>
        <p>
          Maintained templates, regulation changes, policy alignments, and light Q&A via email (2
          business day SLA).
        </p>

        <h4>Bundle vs Individual - which should I choose?</h4>
        <p>
          If you need 2+ components, bundles provide significant savings. Most teams find the
          Professional Bundle hits the sweet spot.
        </p>

        <h4>Support SLAs</h4>
        <ul>
          <li>Free/Starter: Community support</li>
          <li>Individual Components: 2 business days (email)</li>
          <li>Professional Bundle: 2 business days + 2 hrs/quarter</li>
          <li>Enterprise: Next business day, Slack, 6 hrs/quarter</li>
        </ul>

        <h4>Questionnaire Services</h4>
        <p>
          $600 each (non-Enterprise) or included in Enterprise Bundle (up to 3 per year). Expedite
          fee +$750 for 3-day turnaround.
        </p>

        <h4>Fair Use Policy</h4>
        <p>
          Connectors limited to reasonable internal usage; redistribution prohibited. Enterprise
          customers get expanded usage rights.
        </p>

        <h4>Discounts & Promotions</h4>
        <ul>
          <li>Annual plans: 2 months free (shown in pricing above)</li>
          <li>Early stage startups: 10% off with self-attestation</li>
          <li>Volume discounts available for Enterprise customers</li>
        </ul>
      </div>
    </div>
  );
}
