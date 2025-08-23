export default function NotFoundPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16 text-center">
      <div className="mb-8">
        <h1 className="text-6xl font-bold text-gray-300 dark:text-gray-600 mb-4">404</h1>
        <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex flex-wrap justify-center gap-4">
          <a href="/" className="btn btn-primary">
            Back to Home
          </a>
          <a href="/pricing" className="btn btn-outline">
            View Pricing
          </a>
          <a href="/contact" className="btn btn-outline">
            Contact Us
          </a>
        </div>

        <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <h3 className="font-semibold mb-2">Looking for something specific?</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
            <a href="/about" className="text-blue-600 hover:underline">
              About Us
            </a>
            <a href="/pricing" className="text-blue-600 hover:underline">
              Pricing
            </a>
            <a href="/vendor-pack" className="text-blue-600 hover:underline">
              Vendor Pack
            </a>
            <a href="/connectors" className="text-blue-600 hover:underline">
              Connectors
            </a>
            <a href="/evalops" className="text-blue-600 hover:underline">
              EvalOps
            </a>
            <a href="/enterprise" className="text-blue-600 hover:underline">
              Enterprise
            </a>
            <a href="/faq" className="text-blue-600 hover:underline">
              FAQ
            </a>
            <a href="/contact" className="text-blue-600 hover:underline">
              Contact
            </a>
          </div>
        </div>

        <div className="mt-6 p-4 border rounded-lg">
          <h4 className="font-medium mb-2">Need Customer Support?</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
            If you&apos;re a customer looking for your portal or materials, contact us directly.
          </p>
          <a href="/portal" className="btn btn-sm btn-primary mr-2">
            Customer Portal Info
          </a>
          <a href="/contact" className="btn btn-sm btn-outline">
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
}
