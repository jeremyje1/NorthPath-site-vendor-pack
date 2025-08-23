export const metadata = {
  title: "Sign In",
  description: "Sign in to your NorthPath Strategies account",
};

export default function LoginPage() {
  return (
    <div className="max-w-md mx-auto px-4 py-8">
      <div className="card p-8 border">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold mb-2">Sign In</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Access your procurement documentation and resources
          </p>
        </div>

        <form className="space-y-4">
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
            Sign In (Coming Soon)
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Don&apos;t have an account?{" "}
            <a href="/signup" className="text-indigo-600 hover:underline">
              Sign up
            </a>
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-blue-800 dark:text-blue-200 mb-2">
              Authentication Coming Soon
            </h3>
            <p className="text-xs text-blue-700 dark:text-blue-300">
              We&apos;re building a secure customer portal. For now, please{" "}
              <a href="/contact" className="underline">
                contact us
              </a>{" "}
              to access your materials.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
