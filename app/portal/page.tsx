export const metadata = {
  title: "Portal Login",
  description: "Access your NorthPath Strategies customer portal",
};

export default function PortalPage() {
  return (
    <div className="max-w-md mx-auto px-4 py-8">
      <div className="card p-8 border">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold mb-2">Customer Portal</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Access your purchased materials and account
          </p>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mb-6">
          <div className="flex items-start gap-3">
            <div className="text-blue-600 dark:text-blue-400 mt-1">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-medium text-blue-800 dark:text-blue-200 mb-1">
                Portal Coming Soon
              </h3>
              <p className="text-sm text-blue-700 dark:text-blue-300">
                We&apos;re building a dedicated customer portal. In the meantime, you can access
                your materials and get support through our contact team.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="p-4 border rounded-lg">
            <h4 className="font-medium mb-2">Need to Access Your Materials?</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              Contact our team with your order information for immediate access.
            </p>
            <a href="/contact" className="btn btn-primary btn-sm">
              Get Material Access
            </a>
          </div>

          <div className="p-4 border rounded-lg">
            <h4 className="font-medium mb-2">Ready to Purchase?</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              Browse our vendor pack solutions and pricing options.
            </p>
            <a href="/pricing" className="btn btn-outline btn-sm">
              View Pricing
            </a>
          </div>

          <div className="p-4 border rounded-lg">
            <h4 className="font-medium mb-2">Enterprise Solutions</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              Custom solutions with dedicated account management.
            </p>
            <a href="/enterprise" className="btn btn-outline btn-sm">
              Request Quote
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 text-center">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Questions?{" "}
            <a href="/contact" className="text-indigo-600 hover:underline">
              Contact support
            </a>{" "}
            or view our{" "}
            <a href="/faq" className="text-indigo-600 hover:underline">
              FAQ
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
