"use client";

const codeExamples = [
  {
    title: "Quick Start",
    description: "Install and configure Zygur in seconds",
    code: `# Install Zygur
curl -fsSL https://zygur.ai/install.sh | bash

# Configure your API keys
zygur auth login

# Set compliance mode
zygur config set-mode hipaa

# Run your first job
zygur run --provider=auto --gpu=a100 --file=train.py`,
  },
  {
    title: "Generate Audit Report",
    description: "Create compliance reports with one command",
    code: `# Generate audit report for a specific job
zygur audit-export --job=zyg_2847 --format=pdf

# Generate monthly compliance report
zygur audit-export --start=2024-01-01 --end=2024-01-31 --framework=soc2

# Export logs to S3 with custom retention
zygur audit-export --job=zyg_2847 --s3-bucket=my-audit-bucket --retention-days=2555`,
  },
  {
    title: "Advanced Configuration",
    description: "Customize routing and compliance settings",
    code: `# config.yaml
routing_strategy: "cost_optimized"
compliance_framework: "hipaa"

providers:
  lambda:
    api_key: "\${LAMBDA_KEY}"
    enabled: true
    max_cost_per_hour: 3.00
    
  replicate:
    api_key: "\${REPLICATE_KEY}"
    enabled: true
    
audit_logging:
  s3_bucket: "my-audit-logs"
  retention_days: 2555
  encryption: true`,
  },
];

export function Documentation() {
  return (
    <section id="docs" className="w-full py-16 px-6 border-t border-gray-200 dark:border-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-3 text-black dark:text-black dark:text-white">
            Documentation
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-500">
            Comprehensive documentation and examples to help you integrate Zygur into your workflow.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6" style={{ marginLeft: '-20px' }}>
          {codeExamples.map((example) => (
            <div
              key={example.title}
              className="border border-gray-200 dark:border-gray-900 overflow-hidden hover:border-gray-300 dark:hover:border-gray-800 transition-colors"
            >
              <div className="p-4 border-b border-gray-200 dark:border-gray-900 bg-white dark:bg-transparent">
                <h3 className="text-sm font-medium text-black dark:text-white mb-1">{example.title}</h3>
                <p className="text-xs text-gray-600 dark:text-gray-500">{example.description}</p>
              </div>
              <div className="p-4 bg-white dark:bg-black border-t border-gray-200 dark:border-transparent">
                <pre className="text-gray-700 dark:text-gray-400 text-xs overflow-x-auto font-mono">
                  <code>{example.code}</code>
                </pre>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 border border-gray-200 dark:border-gray-900 p-6 bg-white dark:bg-transparent">
          <h3 className="text-sm font-medium text-black dark:text-white mb-2">Need help getting started?</h3>
          <p className="text-xs text-gray-600 dark:text-gray-500 mb-4">
            Our support team is here to help you get up and running with Zygur.
          </p>
          <div className="flex gap-3">
            <a 
              href="mailto:support@zygur.com" 
              className="border border-gray-300 dark:border-gray-800 px-4 py-2 text-xs text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors inline-block"
            >
              Contact Support
            </a>
            <a 
              href="/#docs" 
              className="border border-gray-300 dark:border-gray-800 px-4 py-2 text-xs text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors inline-block"
            >
              Read Documentation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
