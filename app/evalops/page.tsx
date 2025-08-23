export const metadata = { 
  title: "EvalOps - AI Evaluation & Governance",
  description: "LLM evaluation frameworks, quality gates, and AI governance tools for Higher Education compliance"
};

export default function EvalOpsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">EvalOps Toolkit</h1>
        <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
          Prove AI reliability and governance readiness with systematic evaluation frameworks 
          designed for Higher Education risk and compliance requirements.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="card p-8 border">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
            <span className="text-3xl">🎯</span>
            Evaluation Frameworks
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-6">
            Comprehensive testing suites for LLM performance, bias detection, 
            and educational content quality validation.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              <span className="text-sm">Academic accuracy benchmarks</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              <span className="text-sm">Bias and fairness assessment tools</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              <span className="text-sm">Content appropriateness filters</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              <span className="text-sm">Multi-language evaluation support</span>
            </li>
          </ul>
        </div>

        <div className="card p-8 border">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
            <span className="text-3xl">🛡️</span>
            Quality Gates
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-6">
            Automated quality control systems that prevent problematic AI outputs 
            from reaching students and faculty.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              <span className="text-sm">Real-time content monitoring</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              <span className="text-sm">Confidence threshold enforcement</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              <span className="text-sm">Human-in-the-loop workflows</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              <span className="text-sm">Escalation & review processes</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-semibold mb-6">Higher Education AI Governance</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-4xl mb-3">📋</div>
            <h3 className="font-semibold mb-2">NIST AI RMF Mapping</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Align your AI systems with NIST AI Risk Management Framework requirements
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-4xl mb-3">🔒</div>
            <h3 className="font-semibold mb-2">FERPA Compliance</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Ensure student data protection in AI training and inference workflows
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-4xl mb-3">📊</div>
            <h3 className="font-semibold mb-2">Audit Documentation</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Generate compliance reports for institutional review boards
            </p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-6">Technical Implementation</h2>
          
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">🔧 CI/CD Integration</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Automated evaluation pipelines that run with every model update or deployment
              </p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">📈 Performance Monitoring</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Real-time dashboards tracking model performance, bias metrics, and quality trends
              </p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">🔄 Feedback Loops</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Continuous improvement systems that learn from faculty and student interactions
              </p>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-6">Educational Focus Areas</h2>
          
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">📚 Academic Content</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Subject-specific evaluation criteria for STEM, humanities, and professional programs
              </p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">♿ Accessibility</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Ensure AI outputs meet WCAG guidelines and support assistive technologies
              </p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">🌍 Inclusive Design</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Multi-cultural content validation and inclusive language assessment
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Build Trust in Your AI Systems</h2>
        <p className="text-neutral-600 dark:text-neutral-300 mb-6">
          Demonstrate responsible AI practices with evaluation frameworks campus leaders understand.
        </p>
        <div className="flex justify-center gap-4">
          <a href="/pricing" className="btn btn-primary">
            View EvalOps Pricing
          </a>
          <a href="/contact" className="btn btn-outline">
            Discuss Requirements
          </a>
        </div>
      </div>
    </div>
  );
}
