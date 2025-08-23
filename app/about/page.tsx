export const metadata = {
  title: "About Us",
  description: "Learn about NorthPath Strategies and our Higher Education procurement expertise",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-12">
      {/* Hero Section */}
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-6">About NorthPath Strategies</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          We specialize in Higher Education procurement solutions, helping institutions navigate
          complex vendor selection processes with confidence.
        </p>
      </div>

      {/* Mission Section */}
      <div className="card p-8 border">
        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          NorthPath Strategies empowers Higher Education institutions to make informed procurement
          decisions through comprehensive vendor evaluation materials. We bridge the gap between
          institutional needs and vendor capabilities, ensuring successful partnerships that drive
          educational excellence.
        </p>
      </div>

      {/* Expertise Section */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="card p-6 border">
          <h3 className="text-xl font-semibold mb-4">Higher Education Focus</h3>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li>• University procurement processes</li>
            <li>• Academic technology evaluation</li>
            <li>• Compliance & regulatory requirements</li>
            <li>• Budget planning & cost analysis</li>
          </ul>
        </div>

        <div className="card p-6 border">
          <h3 className="text-xl font-semibold mb-4">Vendor Evaluation</h3>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li>• Comprehensive assessment frameworks</li>
            <li>• Risk analysis & mitigation</li>
            <li>• Implementation planning</li>
            <li>• Post-deployment support</li>
          </ul>
        </div>
      </div>

      {/* Services Overview */}
      <div className="card p-8 border">
        <h2 className="text-2xl font-bold mb-6">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-semibold mb-2">Vendor Pack Materials</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Ready-to-use evaluation templates, checklists, and assessment tools.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Custom Consulting</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Tailored procurement strategies for your institution&apos;s unique needs.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Training & Support</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Comprehensive training programs for procurement teams.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Why Choose NorthPath?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-semibold mb-2">Proven Expertise</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Years of experience in Higher Education procurement and vendor management.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Actionable Tools</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Practical, immediately usable materials that save time and reduce risk.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Institution-Focused</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Deep understanding of academic environments and procurement challenges.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Ongoing Support</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Continued guidance and updates to keep your processes current.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Discover how NorthPath Strategies can transform your procurement process.
        </p>
        <div className="flex justify-center gap-4">
          <a href="/pricing" className="btn btn-primary">
            View Our Solutions
          </a>
          <a href="/contact" className="btn btn-outline">
            Schedule a Consultation
          </a>
        </div>
      </div>
    </div>
  );
}
