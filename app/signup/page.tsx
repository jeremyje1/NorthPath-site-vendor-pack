export const metadata = {
  title: "Sign Up",
  description: "Create your NorthPath Strategies account",
};

export default function SignupPage() {
  return (
    <div className="max-w-md mx-auto px-4 py-8">
      <div className="card p-8 border">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold mb-2">Create Account</h1>
          <p className="text-gray-600 dark:text-gray-400">Get started with NorthPath Strategies</p>
        </div>

        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-600"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-600"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium mb-2">
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-600"
              placeholder="Your Company"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-600"
              placeholder="••••••••"
            />
          </div>

          <button type="submit" className="w-full btn btn-primary" disabled>
            Create Account (Coming Soon)
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Already have an account?{" "}
            <a href="/login" className="text-indigo-600 hover:underline">
              Sign in
            </a>
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-blue-800 dark:text-blue-200 mb-2">
              Ready to Get Started?
            </h3>
            <p className="text-xs text-blue-700 dark:text-blue-300 mb-3">
              While we&apos;re building the portal, you can purchase and access materials directly.
            </p>
            <div className="flex gap-2">
              <a href="/contact" className="btn btn-sm btn-primary">
                Contact Sales
              </a>
              <a href="/pricing" className="btn btn-sm btn-outline">
                View Pricing
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
