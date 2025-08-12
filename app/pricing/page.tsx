import { plans } from "@/lib/pricing";
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
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {plans.map((p) => (
          <div
            key={p.key}
            className="rounded border p-6 space-y-4 bg-white/50 dark:bg-neutral-900/50"
          >
            <div>
              <h2 className="text-xl font-semibold">{p.name}</h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">{p.description}</p>
            </div>
            <div className="text-3xl font-bold">
              {p.priceOneTime
                ? `$${p.priceOneTime}`
                : p.priceMonthly
                  ? `$${p.priceMonthly}/mo`
                  : ""}
            </div>
          </div>
        ))}
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Purchase</h2>
        <BuyButtons />
      </div>
    </div>
  );
}
