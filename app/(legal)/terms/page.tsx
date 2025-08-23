export const metadata = {
  title: "Terms of Service",
  description: "NorthPath Strategies Terms of Service",
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>

      <div className="prose dark:prose-invert max-w-none">
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
          Last updated: August 23, 2025
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Agreement to Terms</h2>
          <p>
            By accessing and using NorthPath Strategies&apos; website and services, you accept and
            agree to be bound by these Terms of Service. If you do not agree to these terms, you may
            not access or use our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Description of Service</h2>
          <p>
            NorthPath Strategies provides Higher Education procurement acceleration services,
            including vendor documentation packages, LMS connectors, evaluation operations toolkits,
            and related consulting services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Use License</h2>
          <p className="mb-4">
            We grant you a personal, non-exclusive, non-transferable license to use our services and
            materials for your internal business purposes only.
          </p>
          <p className="mb-4">You may NOT:</p>
          <ul className="list-disc ml-6">
            <li>Reproduce, distribute, or resell our materials</li>
            <li>Remove copyright or other proprietary notations</li>
            <li>Use our services for unlawful purposes</li>
            <li>Attempt to reverse engineer or access source code</li>
            <li>Share access credentials with third parties</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Payment Terms</h2>
          <ul className="list-disc ml-6">
            <li>All fees are in USD and exclude applicable taxes</li>
            <li>Subscription fees are billed in advance</li>
            <li>No refunds for unused subscription periods</li>
            <li>We may change pricing with 30 days notice</li>
            <li>Enterprise accounts may have custom payment terms</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
          <p>
            All content, documentation, and materials provided by NorthPath Strategies remain our
            intellectual property. You receive a license to use, not ownership.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Disclaimers</h2>
          <p className="mb-4">
            Our services are provided &quot;as is&quot; without warranties of any kind. We provide
            guidance and templates, not legal advice.
          </p>
          <ul className="list-disc ml-6">
            <li>We do not guarantee specific procurement outcomes</li>
            <li>Institution requirements may vary and change</li>
            <li>You remain responsible for compliance with all applicable laws</li>
            <li>Our materials should be reviewed by your legal counsel</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, NorthPath Strategies shall not be liable for any
            indirect, incidental, special, or consequential damages arising from your use of our
            services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Privacy</h2>
          <p>
            Your privacy is important to us. Please review our Privacy Policy, which also governs
            your use of the service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Termination</h2>
          <p>
            Either party may terminate these terms at any time. Upon termination, your right to
            access our services ceases immediately.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
          <p>
            These terms are governed by the laws of the State of California, without regard to
            conflict of law principles.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. Continued use of our services
            after changes constitutes acceptance of the new terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <p>Questions about these Terms of Service should be sent to us at:</p>
          <ul className="list-none mt-4">
            <li>Email: jeremy.estrella@gmail.com</li>
            <li>
              Website:{" "}
              <a href="/contact" className="text-blue-600 hover:underline">
                Contact Form
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
