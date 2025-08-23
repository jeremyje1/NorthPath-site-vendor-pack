import ContactForm from "./ContactForm";

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with NorthPath Strategies for Higher Education procurement assistance",
};

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-300">
          Ready to accelerate your Higher Education sales process? Let&apos;s talk.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <ContactForm />
        </div>

        <div className="space-y-6">
          <div className="card p-6 border">
            <h2 className="text-xl font-semibold mb-4">Other Ways to Connect</h2>

            <div className="space-y-4">
              <div>
                <h3 className="font-medium">Schedule a Strategy Call</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                  30-minute consultation to review your current bottlenecks
                </p>
                <a
                  href="https://calendly.com/jeremyestrella/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm"
                >
                  Book on Calendly
                </a>
              </div>

              <div>
                <h3 className="font-medium">Direct Email</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  jeremy.estrella@gmail.com
                </p>
              </div>

              <div>
                <h3 className="font-medium">LinkedIn</h3>
                <a
                  href="https://www.linkedin.com/in/jeremyestrella/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline text-sm"
                >
                  Connect with Jeremy Estrella
                </a>
              </div>
            </div>
          </div>

          <div className="card p-6 border">
            <h2 className="text-xl font-semibold mb-4">What to Expect</h2>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                Response within 24 hours on business days
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                Cycle time risk assessment
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                Gap analysis snapshot
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                Recommended starting approach
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
