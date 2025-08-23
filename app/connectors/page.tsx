export const metadata = { 
  title: "LMS & Campus Connectors",
  description: "Pre-built integration patterns for Canvas, Banner, SharePoint and other Higher Education systems"
};

export default function ConnectorsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">LMS & Campus Connectors</h1>
        <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
          Remove integration blockers early with pre-built connector patterns, 
          API documentation, and deployment guides for major Higher Education platforms.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <div className="card p-6 border">
          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
            <span className="text-2xl">📚</span>
            Canvas LMS
          </h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
            REST API patterns, OAuth flows, grade passback, course provisioning, 
            and data sync implementations.
          </p>
          <ul className="text-xs space-y-1">
            <li>• Assignment & submission handling</li>
            <li>• Grade center integration</li>
            <li>• Single sign-on (SSO) setup</li>
            <li>• Course roster management</li>
          </ul>
        </div>

        <div className="card p-6 border">
          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
            <span className="text-2xl">🏛️</span>
            Banner ERP
          </h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
            Student Information System integration patterns for enrollment, 
            demographics, and academic record management.
          </p>
          <ul className="text-xs space-y-1">
            <li>• Student enrollment data</li>
            <li>• Academic calendar sync</li>
            <li>• Transcript integration</li>
            <li>• Financial aid status</li>
          </ul>
        </div>

        <div className="card p-6 border">
          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
            <span className="text-2xl">📊</span>
            SharePoint
          </h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
            Document management, collaboration spaces, and workflow integration 
            for campus-wide content systems.
          </p>
          <ul className="text-xs space-y-1">
            <li>• Document library sync</li>
            <li>• Workflow automation</li>
            <li>• Permission management</li>
            <li>• Search integration</li>
          </ul>
        </div>

        <div className="card p-6 border">
          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
            <span className="text-2xl">🔒</span>
            Blackboard Learn
          </h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
            Legacy LMS integration patterns, content migration strategies, 
            and parallel deployment approaches.
          </p>
          <ul className="text-xs space-y-1">
            <li>• Course content sync</li>
            <li>• User provisioning</li>
            <li>• Assessment integration</li>
            <li>• Gradebook alignment</li>
          </ul>
        </div>

        <div className="card p-6 border">
          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
            <span className="text-2xl">🎓</span>
            Moodle
          </h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
            Open-source LMS customization guides, plugin development patterns, 
            and campus hosting considerations.
          </p>
          <ul className="text-xs space-y-1">
            <li>• Custom plugin development</li>
            <li>• Theme customization</li>
            <li>• Database integration</li>
            <li>• Multi-tenant setup</li>
          </ul>
        </div>

        <div className="card p-6 border">
          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
            <span className="text-2xl">🔗</span>
            SAML/LDAP
          </h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
            Campus identity management integration for seamless authentication 
            and directory services.
          </p>
          <ul className="text-xs space-y-1">
            <li>• Active Directory sync</li>
            <li>• SAML assertion mapping</li>
            <li>• Role-based access control</li>
            <li>• Multi-factor authentication</li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-semibold mb-6">What&apos;s Included</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-medium mb-4">Technical Documentation</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                API endpoint specifications & authentication flows
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                Data mapping schemas & transformation logic
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                Error handling & retry patterns
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                Rate limiting & performance optimization
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Implementation Support</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                Sample code in multiple languages
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                Campus environment setup guides
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                Testing & validation procedures
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                Troubleshooting & maintenance playbooks
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Ready to Eliminate Integration Delays?</h2>
        <p className="text-neutral-600 dark:text-neutral-300 mb-6">
          Get connector documentation and implementation guides that work with real campus IT constraints.
        </p>
        <div className="flex justify-center gap-4">
          <a href="/pricing" className="btn btn-primary">
            View Pricing
          </a>
          <a href="/contact" className="btn btn-outline">
            Schedule Consultation
          </a>
        </div>
      </div>
    </div>
  );
}
