import BuyButtons from "@/components/BuyButtons";

export const metadata = { title: "Pricing" };

export default function PricingPage() {
  return (
    <div className="space-y-10">
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-bold">Pricing</h1>
        <p className="text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
          Choose the plan that fits your needs.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="card space-y-3">
          <h2 className="text-xl font-semibold">Vendor Pack</h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            One-time compliance starter assets.
          </p>
          <BuyButtons product="vendor-pack" />
        </div>
        <div className="card space-y-3">
          <h2 className="text-xl font-semibold">Updates</h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Monthly refreshed content & changes.
          </p>
          <BuyButtons product="vendor-pack-updates" />
        </div>
        <div className="card space-y-3">
          <h2 className="text-xl font-semibold">Connectors</h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Canvas / Banner / SharePoint integration.
          </p>
          <BuyButtons product="connectors" />
        </div>
        <div className="card space-y-3">
          <h2 className="text-xl font-semibold">EvalOps</h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Evaluation operations toolkit.
          </p>
          <BuyButtons product="evalops" />
        </div>
      </div>
    </div>
  );
}
