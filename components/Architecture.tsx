"use client";

export function Architecture() {
  return (
    <section className="w-full py-16 px-6 border-t border-gray-200 dark:border-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-3 text-black dark:text-black dark:text-white">
            How Zygur Works
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-500 max-w-2xl mx-auto">
            A simple CLI that sits between your code and GPU providers, automatically handling compliance while optimizing costs.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Architecture Diagram */}
          <div className="border border-gray-200 dark:border-gray-900 p-8 bg-white dark:bg-black">
            <div className="flex flex-col gap-6">
              {/* Your Code */}
              <div className="text-center">
                <div className="inline-block border border-gray-200 dark:border-gray-800 px-6 py-3 bg-gray-50 dark:bg-gray-900">
                  <span className="text-sm text-black dark:text-white font-mono">Your AI Training Code</span>
                </div>
              </div>

              {/* Arrow Down */}
              <div className="flex justify-center">
                <div className="text-gray-400 dark:text-gray-600 text-2xl">↓</div>
              </div>

              {/* Zygur CLI */}
              <div className="text-center">
                <div className="inline-block border border-gray-200 dark:border-gray-800 px-6 py-3 bg-gray-50 dark:bg-gray-900">
                  <span className="text-sm text-black dark:text-white font-mono">Zygur CLI</span>
                </div>
                <div className="mt-2 text-xs text-gray-500">
                  Compliance • Routing • Logging • Optimization
                </div>
              </div>

              {/* Arrow Down */}
              <div className="flex justify-center">
                <div className="text-gray-400 dark:text-gray-600 text-2xl">↓</div>
              </div>

              {/* GPU Providers */}
              <div className="grid grid-cols-4 gap-4">
                <div className="border border-gray-200 dark:border-gray-800 px-4 py-3 text-center bg-gray-50 dark:bg-gray-900">
                  <span className="text-xs text-gray-600 dark:text-gray-400">Lambda Labs</span>
                  <div className="text-xs text-green-600 dark:text-green-500 mt-1">$2.10/hr</div>
                </div>
                <div className="border border-gray-200 dark:border-gray-800 px-4 py-3 text-center bg-gray-50 dark:bg-gray-900">
                  <span className="text-xs text-gray-600 dark:text-gray-400">Vast.ai</span>
                  <div className="text-xs text-gray-500 mt-1">$2.35/hr</div>
                </div>
                <div className="border border-gray-200 dark:border-gray-800 px-4 py-3 text-center bg-gray-50 dark:bg-gray-900">
                  <span className="text-xs text-gray-600 dark:text-gray-400">CoreWeave</span>
                  <div className="text-xs text-gray-500 mt-1">$2.50/hr</div>
                </div>
                <div className="border border-gray-200 dark:border-gray-800 px-4 py-3 text-center bg-gray-50 dark:bg-gray-900">
                  <span className="text-xs text-gray-600 dark:text-gray-400">Replicate</span>
                  <div className="text-xs text-gray-500 mt-1">$2.80/hr</div>
                </div>
              </div>
            </div>
          </div>

          {/* What Zygur Does */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="border border-gray-200 dark:border-gray-900 p-6">
              <h3 className="text-sm font-medium text-black dark:text-white mb-2">1. Routes Intelligently</h3>
              <p className="text-xs text-gray-600 dark:text-gray-500 leading-relaxed">
                Analyzes all GPU providers in real-time and routes your job to your preferred available option. Save up to 60% vs. AWS.
              </p>
            </div>
            <div className="border border-gray-200 dark:border-gray-900 p-6">
              <h3 className="text-sm font-medium text-black dark:text-white mb-2">2. Logs Everything</h3>
              <p className="text-xs text-gray-600 dark:text-gray-500 leading-relaxed">
                Every action is logged with tamper-proof audit trails. 7-year retention. HIPAA/SOC2/GDPR compliant out of the box.
              </p>
            </div>
            <div className="border border-gray-200 dark:border-gray-900 p-6">
              <h3 className="text-sm font-medium text-black dark:text-white mb-2">3. Generates Reports</h3>
              <p className="text-xs text-gray-600 dark:text-gray-500 leading-relaxed">
                One command generates compliance reports with all metadata, timestamps, and data lineage. Pass audits in minutes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
