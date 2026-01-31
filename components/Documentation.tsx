"use client";

const codeExamples = [
  {
    title: "Quick Start",
    description: "Initialize Zygur and create your first workflow",
    code: `# Install Zygur CLI
curl -fsSL https://zygur.ai/install.sh | bash

# Initialize workflow engine
zygur init --mode=hipaa

# Create workflow from YAML
zygur workflow create patient-monitoring.yaml

# Deploy and schedule
zygur workflow deploy patient_monitoring_v1`,
  },
  {
    title: "Workflow Definition",
    description: "Define temporal workflows in declarative YAML",
    code: `# patient-monitoring.yaml
name: patient_monitoring
version: v1
schedule: "0 */4 * * *"  # Every 4 hours

steps:
  - id: capture
    type: api_call
    endpoint: "\${CAMERA_API}/capture"
    
  - id: analyze
    type: model_inference
    model: "yolov8-medical-v1.2"
    provider: "replicate"
    depends_on: [capture]
    
  - id: alert
    type: conditional
    condition: "analyze.confidence > 0.85"
    action: "send_notification"
    depends_on: [analyze]

retry_policy:
  max_attempts: 3
  backoff: exponential`,
  },
  {
    title: "Audit Export",
    description: "Generate cryptographic compliance reports",
    code: `# Export audit trail for specific workflow
zygur audit export --workflow=patient_monitoring_v1 --format=soc2

# Verify Merkle tree integrity
zygur audit verify --workflow=patient_monitoring_v1

# Generate compliance report with signatures
zygur audit export --workflow=patient_monitoring_v1 \\
  --format=pdf \\
  --include-signatures \\
  --retention=7years`,
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
            Get started with Zygur's temporal workflow engine. Define, deploy, and audit your automations.
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
