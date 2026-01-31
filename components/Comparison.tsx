"use client";

export function Comparison() {
  return (
    <section className="w-full py-16 px-6 border-t border-gray-200 dark:border-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-3 text-black dark:text-white">
            Zygur vs. Alternatives
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-500 max-w-2xl mx-auto">
            The only temporal workflow engine built specifically for regulated automation with cryptographic audit trails.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Temporal.io */}
            <div className="border border-gray-900 p-6">
              <div className="text-center mb-4">
                <h3 className="text-sm font-medium text-gray-400 mb-2">Temporal.io</h3>
                <div className="text-xs text-gray-600">Workflow Orchestration</div>
              </div>
              <ul className="space-y-3 text-xs">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span className="text-gray-400">Durable execution</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span className="text-gray-400">State management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">✗</span>
                  <span className="text-gray-500">No cryptographic audit chains</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">✗</span>
                  <span className="text-gray-500">Not compliance-focused</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">✗</span>
                  <span className="text-gray-500">Complex self-hosting</span>
                </li>
              </ul>
            </div>

            {/* Airflow/Prefect */}
            <div className="border border-gray-900 p-6">
              <div className="text-center mb-4">
                <h3 className="text-sm font-medium text-gray-400 mb-2">Airflow / Prefect</h3>
                <div className="text-xs text-gray-600">Data Pipelines</div>
              </div>
              <ul className="space-y-3 text-xs">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span className="text-gray-400">DAG-based workflows</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span className="text-gray-400">Scheduling</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">✗</span>
                  <span className="text-gray-500">No Merkle tree audit trails</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">✗</span>
                  <span className="text-gray-500">Manual compliance setup</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">✗</span>
                  <span className="text-gray-500">Not designed for regulated industries</span>
                </li>
              </ul>
            </div>

            {/* Zygur */}
            <div className="border border-gray-900 p-6">
              <div className="text-center mb-4">
                <h3 className="text-sm font-medium text-gray-400 mb-2">Zygur</h3>
                <div className="text-xs text-gray-600">Temporal + Compliance</div>
              </div>
              <ul className="space-y-3 text-xs">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span className="text-gray-400">Temporal state machines</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span className="text-gray-400">Cryptographic Merkle audit chains</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span className="text-gray-400">HIPAA/SOC2/GDPR ready</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span className="text-gray-400">Tamper-proof event sourcing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span className="text-gray-400">Built for regulated automation</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Stats */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center border border-gray-200 dark:border-gray-900 p-6 bg-white dark:bg-transparent">
              <div className="text-3xl font-bold text-black dark:text-white mb-2">99.97%</div>
              <div className="text-xs text-gray-600 dark:text-gray-500">Execution Success Rate</div>
            </div>
            <div className="text-center border border-gray-200 dark:border-gray-900 p-6 bg-white dark:bg-transparent">
              <div className="text-3xl font-bold text-black dark:text-white mb-2">Tamper-Proof</div>
              <div className="text-xs text-gray-600 dark:text-gray-500">Merkle Tree Audit Chains</div>
            </div>
            <div className="text-center border border-gray-200 dark:border-gray-900 p-6 bg-white dark:bg-transparent">
              <div className="text-3xl font-bold text-black dark:text-white mb-2">7 Years</div>
              <div className="text-xs text-gray-600 dark:text-gray-500">Audit Retention (Enterprise)</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
