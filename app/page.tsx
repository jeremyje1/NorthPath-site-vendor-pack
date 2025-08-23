import Link from "next/link";

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <span className="badge inline-block mb-4">For EdTech & AI Teams</span>
        <h1 className="text-5xl font-bold mb-6 leading-tight">
          Accelerate Higher Education Sales
          <span className="block text-indigo-600">From Months to Weeks</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
          Cut through campus procurement delays with pre-built compliance documentation, LMS
          integrations, and AI evaluation frameworks designed for Higher Education.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/pricing" className="btn btn-primary btn-lg">
            View Pricing & Plans
          </Link>
          <Link href="/contact" className="btn btn-outline btn-lg">
            Schedule Strategy Call
          </Link>
        </div>
      </div>

      {/* Value Proposition */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="text-center">
          <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">📋</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">Vendor Pack</h3>
          <p className="text-gray-600 dark:text-gray-400">
            HECVAT-Lite, VPAT/ACR templates, AI governance mapping, and FERPA documentation
          </p>
          <Link href="/vendor-pack" className="text-indigo-600 hover:underline text-sm">
            Learn more →
          </Link>
        </div>

        <div className="text-center">
          <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">🔗</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">LMS Connectors</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Canvas, Banner, SharePoint integration guides to eliminate IT bottlenecks
          </p>
          <Link href="/connectors" className="text-indigo-600 hover:underline text-sm">
            Learn more →
          </Link>
        </div>

        <div className="text-center">
          <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">🎯</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">EvalOps Toolkit</h3>
          <p className="text-gray-600 dark:text-gray-400">
            AI evaluation frameworks and quality gates for governance compliance
          </p>
          <Link href="/evalops" className="text-indigo-600 hover:underline text-sm">
            Learn more →
          </Link>
        </div>
      </div>

      {/* Social Proof */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 mb-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold mb-4">Why Campus Teams Choose NorthPath</h2>
          <p className="text-gray-600 dark:text-gray-400">
            20+ years inside Higher Education procurement, risk, and security review workflows
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex items-start gap-3">
            <span className="text-green-600 text-xl mt-1">✓</span>
            <div>
              <h4 className="font-semibold">Reduce Review Cycles</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Cut first security & accessibility review from 3-4 months to 4-6 weeks
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-green-600 text-xl mt-1">✓</span>
            <div>
              <h4 className="font-semibold">Insider Knowledge</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Documentation that mirrors internal campus review frameworks
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-green-600 text-xl mt-1">✓</span>
            <div>
              <h4 className="font-semibold">Integration Ready</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Remove IT blockers with proven LMS and SIS connector patterns
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-green-600 text-xl mt-1">✓</span>
            <div>
              <h4 className="font-semibold">AI Governance</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Demonstrate responsible AI practices with evaluation frameworks
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <h2 className="text-3xl font-semibold mb-4">Ready to Accelerate Your Campus Sales?</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          Start with a strategy call to identify your biggest bottlenecks and build a plan to cut
          months off your Higher Education sales cycles.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://calendly.com/jeremyestrella/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg"
          >
            Schedule Strategy Call
          </a>
          <Link href="/pricing" className="btn btn-outline btn-lg">
            View Pricing
          </Link>
        </div>
      </div>
    </div>
  );
}
