export const metadata = {
  title: "FAQ",
  description: "Frequently asked questions about NorthPath Strategies vendor pack services",
};

export default function FAQPage() {
  const faqs = [
    {
      question: "What is a Vendor Pack?",
      answer:
        "A Vendor Pack is a comprehensive collection of evaluation materials, checklists, and assessment tools specifically designed for Higher Education institutions to thoroughly evaluate potential vendors and technology solutions.",
    },
    {
      question: "How quickly can I access the materials after purchase?",
      answer:
        "Digital materials are available for immediate download after purchase. Physical materials (if included) typically ship within 1-2 business days.",
    },
    {
      question: "Are the materials customizable for my institution?",
      answer:
        "Yes! Our materials are designed to be adaptable. Enterprise customers receive fully customizable templates with institutional branding options.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards and offer enterprise billing options including purchase orders and net terms for qualifying institutions.",
    },
    {
      question: "Do you offer training on how to use the materials?",
      answer:
        "Yes, training is included with Enterprise packages. Professional packages include documentation and best practices guides. Additional training sessions can be purchased separately.",
    },
    {
      question: "How often are the materials updated?",
      answer:
        "We continuously update our materials based on industry changes, regulatory updates, and customer feedback. Active subscribers receive updates at no additional cost.",
    },
    {
      question: "Can I get a refund if the materials don't meet my needs?",
      answer:
        "We offer a 30-day satisfaction guarantee. If you're not completely satisfied, we'll work with you to find a solution or provide a full refund.",
    },
    {
      question: "Do you offer institutional discounts?",
      answer:
        "Yes, we offer volume discounts for multi-department purchases and special pricing for educational consortiums. Contact us for custom pricing.",
    },
    {
      question: "Are your materials compliant with FERPA and other regulations?",
      answer:
        "Our evaluation frameworks include compliance checklists for FERPA, ADA, and other relevant Higher Education regulations. We help you ensure vendor compliance.",
    },
    {
      question: "Can I use these materials for multiple vendor evaluations?",
      answer:
        "Absolutely! Our materials are designed for ongoing use. Once purchased, you can use them for unlimited vendor evaluations within your institution.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Everything you need to know about our vendor evaluation services
        </p>
      </div>

      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="card p-6 border">
            <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{faq.answer}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Our team is here to help you find the right solution for your institution.
          </p>
          <div className="flex justify-center gap-4">
            <a href="/contact" className="btn btn-primary">
              Contact Support
            </a>
            <a href="/enterprise" className="btn btn-outline">
              Request Enterprise Quote
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
