export const metadata = {
  title: "Privacy Policy",
  description: "NorthPath Strategies Privacy Policy"
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
          Last updated: August 23, 2025
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p>
            NorthPath Strategies (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
            when you visit our website or use our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
          
          <h3 className="text-lg font-medium mb-2">Information You Provide</h3>
          <ul className="list-disc ml-6 mb-4">
            <li>Contact information (name, email, company) when you fill out forms</li>
            <li>Communication preferences and marketing consents</li>
            <li>Messages and inquiries you send to us</li>
            <li>Payment information when you purchase our services (processed securely through Stripe)</li>
          </ul>

          <h3 className="text-lg font-medium mb-2">Information Automatically Collected</h3>
          <ul className="list-disc ml-6 mb-4">
            <li>Log data (IP address, browser type, pages visited)</li>
            <li>Device information and identifiers</li>
            <li>Usage analytics (time spent, click patterns)</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
          <ul className="list-disc ml-6">
            <li>Provide and improve our services</li>
            <li>Respond to your inquiries and provide customer support</li>
            <li>Send you updates about our services (with your consent)</li>
            <li>Process payments and fulfill orders</li>
            <li>Analyze website usage to improve user experience</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Information Sharing</h2>
          <p className="mb-4">We do not sell your personal information. We may share information with:</p>
          <ul className="list-disc ml-6">
            <li><strong>Service Providers:</strong> Stripe (payments), hosting providers, analytics services</li>
            <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
            <li><strong>Business Transfers:</strong> In connection with mergers or acquisitions</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your data, 
            including encryption, access controls, and regular security assessments. However, 
            no method of transmission over the Internet is 100% secure.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
          <p className="mb-4">Depending on your location, you may have the right to:</p>
          <ul className="list-disc ml-6">
            <li>Access your personal information</li>
            <li>Correct inaccurate data</li>
            <li>Delete your information</li>
            <li>Object to processing</li>
            <li>Data portability</li>
            <li>Withdraw consent</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy or our data practices, please contact us:
          </p>
          <ul className="list-none mt-4">
            <li>Email: jeremy.estrella@gmail.com</li>
            <li>Website: <a href="/contact" className="text-blue-600 hover:underline">Contact Form</a></li>
          </ul>
        </section>
      </div>
    </div>
  );
}
