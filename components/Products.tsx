"use client";

const products = [
  {
    name: "Safe Harbor",
    price: "$49",
    description: "Checks if datasets are HIPAA Safe Harbor de-identified by scanning for 18 identifiers.",
    command: "safeharbor check patient_export.csv",
    painPoint: "Avoids $50K HIPAA fines before sending data to ML teams",
    icp: "HealthTech developers, data engineers",
  },
  {
    name: "Evidence",
    price: "$99",
    description: "Auto-generates SOC2 evidence packages by scraping Git history, Jira, and Slack.",
    command: "evidence collect --start=2024-01-01 --type=access-control",
    painPoint: "Saves 40 hours of manual screenshot collection for auditors",
    icp: "Compliance engineers at B2B SaaS startups",
  },
  {
    name: "PiiGrep",
    price: "$29",
    description: "Scans codebase for hardcoded PII like emails, SSNs, and secrets.",
    command: "piigrep ./src --format=sarif",
    painPoint: "Catches PII leaks in CI/CD before audit",
    icp: "DevOps engineers, security-conscious developers",
  },
  {
    name: "AuditDiff",
    price: "$79",
    description: "Shows exactly what changed between two database dumps for audit validation.",
    command: "auditdiff dump_0301.sql dump_0401.sql --table=patients",
    painPoint: "Debugging 'who changed what' during audit panic",
    icp: "Database admins, compliance developers",
  },
  {
    name: "BAA-Check",
    price: "$39",
    description: "Validates vendor URLs and subprocessors against HIPAA BAA whitelist.",
    command: "baacheck --vendor stripe.com",
    painPoint: "Responds to 'subprocessor review' requests from hospital legal",
    icp: "HealthTech CTOs, vendor management",
  },
  {
    name: "Retention",
    price: "$149",
    description: "Automatically deletes/pseudonymizes old database records per GDPR/CCPA retention policies.",
    command: "retention apply --db=postgres://prod --policy=7years --dry-run",
    painPoint: "Avoids GDPR fines, runs as cron job",
    icp: "Data engineers, privacy officers",
  },
  {
    name: "Guardrail",
    price: "$19",
    description: "Pre-commit hook that blocks commits containing HIPAA keywords (PHI, patient names).",
    command: 'git commit -m "Added patient data" → [BLOCKED]',
    painPoint: "Prevents 'oops I pushed SSNs to GitHub' fire drill",
    icp: "All regulated developers, Git users",
  },
];

export function Products() {
  return (
    <section id="products" className="w-full py-16 px-6 border-t border-gray-200 dark:border-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-3 text-black dark:text-white">
            Our Tools
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-500 max-w-2xl">
            Seven CLI tools that solve real problems for regulated software teams. One-time pricing. No subscriptions.
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
          {products.map((product) => (
            <div
              key={product.name}
              className="border border-gray-200 dark:border-gray-900 p-6 bg-white dark:bg-transparent hover:border-gray-300 dark:hover:border-gray-800 transition-colors"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-bold text-black dark:text-white">{product.name}</h3>
                <span className="text-sm font-medium text-green-600 dark:text-green-400">{product.price}</span>
              </div>
              
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {product.description}
              </p>

              <div className="bg-gray-100 dark:bg-gray-900 rounded p-3 mb-4 font-mono text-xs overflow-x-auto">
                <span className="text-gray-700 dark:text-gray-300">$ {product.command}</span>
              </div>

              <div className="space-y-2 mb-4">
                <div>
                  <p className="text-xs font-medium text-gray-500 dark:text-gray-500 mb-1">Pain Point</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{product.painPoint}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-500 dark:text-gray-500 mb-1">Who It's For</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{product.icp}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
