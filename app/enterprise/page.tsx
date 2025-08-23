import EnterpriseQuote from "../../components/EnterpriseQuote";

export const metadata = {
  title: "Enterprise Quote",
  description: "Get a custom quote for enterprise Higher Education consulting services",
};

export default function EnterpriseQuotePage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">Enterprise Quote</h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Get customized solutions for your institution&apos;s procurement needs
        </p>
      </div>

      <div className="card p-8 border">
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-3">Custom Enterprise Solutions</h2>
          <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <p>• Comprehensive Vendor Pack Suite</p>
            <p>• Custom Institution Branding</p>
            <p>• Dedicated Account Management</p>
            <p>• Priority Support & Training</p>
            <p>• Volume Pricing Discounts</p>
            <p>• Custom Integration Services</p>
          </div>
        </div>

        <EnterpriseQuote />
      </div>
    </div>
  );
}
