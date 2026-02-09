"use client";

export function Comparison() {
  return (
    <section className="w-full py-16 px-6 border-t border-brand-grey">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-3 text-brand-grey">
            Zygur vs. Alternatives
          </h2>
          <p className="text-sm text-brand-grey max-w-2xl mx-auto">
            The only temporal workflow engine built specifically for regulated automation with cryptographic audit trails.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Temporal.io */}
            <div className="border border-brand-grey p-6">
              <div className="text-center mb-4">
                <h3 className="text-sm font-medium text-brand-grey mb-2">Temporal.io</h3>
                <div className="text-xs text-brand-grey">Workflow Orchestration</div>
              </div>
              <ul className="space-y-3 text-xs">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span className="text-brand-grey">Durable execution</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span className="text-brand-grey">State management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">✗</span>
                  <span className="text-brand-grey">No cryptographic audit chains</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">✗</span>
                  <span className="text-brand-grey">Not compliance-focused</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">✗</span>
                  <span className="text-brand-grey">Complex self-hosting</span>
                </li>
              </ul>
            </div>

            {/* Airflow/Prefect */}
            <div className="border border-brand-grey p-6">
              <div className="text-center mb-4">
                <h3 className="text-sm font-medium text-brand-grey mb-2">Airflow / Prefect</h3>
                <div className="text-xs text-brand-grey">Data Pipelines</div>
              </div>
              <ul className="space-y-3 text-xs">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span className="text-brand-grey">DAG-based workflows</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span className="text-brand-grey">Scheduling</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">✗</span>
                  <span className="text-brand-grey">No Merkle tree audit trails</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">✗</span>
                  <span className="text-brand-grey">Manual compliance setup</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">✗</span>
                  <span className="text-brand-grey">Not designed for regulated industries</span>
                </li>
              </ul>
            </div>

            {/* Zygur */}
            <div className="border border-brand-grey p-6">
              <div className="text-center mb-4">
                <h3 className="text-sm font-medium text-brand-grey mb-2">Zygur</h3>
                <div className="text-xs text-brand-grey">Temporal + Compliance</div>
              </div>
              <ul className="space-y-3 text-xs">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span className="text-brand-grey">Temporal state machines</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span className="text-brand-grey">Cryptographic Merkle audit chains</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span className="text-brand-grey">HIPAA/SOC2/GDPR ready</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span className="text-brand-grey">Tamper-proof event sourcing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span className="text-brand-grey">Built for regulated automation</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Stats */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center border border-brand-grey p-6 bg-transparent">
              <div className="text-3xl font-bold text-brand-grey mb-2">99.97%</div>
              <div className="text-xs text-brand-grey">Execution Success Rate</div>
            </div>
            <div className="text-center border border-brand-grey p-6 bg-transparent">
              <div className="text-3xl font-bold text-brand-grey mb-2">Tamper-Proof</div>
              <div className="text-xs text-brand-grey">Merkle Tree Audit Chains</div>
            </div>
            <div className="text-center border border-brand-grey p-6 bg-transparent">
              <div className="text-3xl font-bold text-brand-grey mb-2">7 Years</div>
              <div className="text-xs text-brand-grey">Audit Retention (Enterprise)</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
