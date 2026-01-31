"use client";

export function Architecture() {
  return (
    <section className="w-full py-16 px-6 border-t border-gray-200 dark:border-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-3 text-black dark:text-black dark:text-white">
            Technical Architecture
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-500 max-w-2xl mx-auto">
            Workflow compiler and temporal state engine that orchestrates external compute while maintaining compliance audit chains.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Architecture Diagram */}
          <div className="border border-gray-200 dark:border-gray-900 p-8 bg-white dark:bg-black">
            <div className="flex flex-col gap-6">
              {/* Workflow Definition */}
              <div className="text-center">
                <div className="inline-block border border-gray-200 dark:border-gray-800 px-6 py-3 bg-gray-50 dark:bg-gray-900">
                  <span className="text-sm text-black dark:text-white font-mono">Workflow Definition (YAML/JSON)</span>
                </div>
              </div>

              {/* Arrow Down */}
              <div className="flex justify-center">
                <div className="text-gray-400 dark:text-gray-600 text-2xl">↓</div>
              </div>

              {/* Zygur Compiler */}
              <div className="text-center">
                <div className="inline-block border border-gray-200 dark:border-gray-800 px-6 py-3 bg-gray-50 dark:bg-gray-900">
                  <span className="text-sm text-black dark:text-white font-mono">Zygur Compiler (Go)</span>
                </div>
                <div className="mt-2 text-xs text-gray-500">
                  DAG Validation • State Graph Generation • Event Sourcing
                </div>
              </div>

              {/* Arrow Down */}
              <div className="flex justify-center">
                <div className="text-gray-400 dark:text-gray-600 text-2xl">↓</div>
              </div>

              {/* Temporal State Graph */}
              <div className="text-center">
                <div className="inline-block border border-gray-200 dark:border-gray-800 px-6 py-3 bg-gray-50 dark:bg-gray-900">
                  <span className="text-sm text-black dark:text-white font-mono">Temporal State Graph</span>
                </div>
                <div className="mt-2 text-xs text-gray-500">
                  SQLite/Postgres + Merkle Tree (Cryptographic Audit Chain)
                </div>
              </div>

              {/* Arrow Down */}
              <div className="flex justify-center">
                <div className="text-gray-400 dark:text-gray-600 text-2xl">↓</div>
              </div>

              {/* Execution Engine */}
              <div className="text-center">
                <div className="inline-block border border-gray-200 dark:border-gray-800 px-6 py-3 bg-gray-50 dark:bg-gray-900">
                  <span className="text-sm text-black dark:text-white font-mono">Execution Engine (Go routines)</span>
                </div>
                <div className="mt-2 text-xs text-gray-500">
                  Warm Pools • Checkpointing • Retry Logic
                </div>
              </div>

              {/* Arrow Down */}
              <div className="flex justify-center">
                <div className="text-gray-400 dark:text-gray-600 text-2xl">↓</div>
              </div>

              {/* Cloud Providers */}
              <div className="grid grid-cols-4 gap-4">
                <div className="border border-gray-200 dark:border-gray-800 px-4 py-3 text-center bg-gray-50 dark:bg-gray-900">
                  <span className="text-xs text-gray-600 dark:text-gray-400">Replicate</span>
                  <div className="text-xs text-gray-500 mt-1">API</div>
                </div>
                <div className="border border-gray-200 dark:border-gray-800 px-4 py-3 text-center bg-gray-50 dark:bg-gray-900">
                  <span className="text-xs text-gray-600 dark:text-gray-400">Lambda</span>
                  <div className="text-xs text-gray-500 mt-1">Serverless</div>
                </div>
                <div className="border border-gray-200 dark:border-gray-800 px-4 py-3 text-center bg-gray-50 dark:bg-gray-900">
                  <span className="text-xs text-gray-600 dark:text-gray-400">Vast.ai</span>
                  <div className="text-xs text-gray-500 mt-1">GPU Cloud</div>
                </div>
                <div className="border border-gray-200 dark:border-gray-800 px-4 py-3 text-center bg-gray-50 dark:bg-gray-900">
                  <span className="text-xs text-gray-600 dark:text-gray-400">On-Prem</span>
                  <div className="text-xs text-gray-500 mt-1">Custom</div>
                </div>
              </div>
            </div>
          </div>

          {/* What Zygur Does */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="border border-gray-200 dark:border-gray-900 p-6">
              <h3 className="text-sm font-medium text-black dark:text-white mb-2">1. Compiles Workflows</h3>
              <p className="text-xs text-gray-600 dark:text-gray-500 leading-relaxed">
                Parses declarative YAML definitions into DAG structures. Validates dependencies, schedules, and retry policies before execution.
              </p>
            </div>
            <div className="border border-gray-200 dark:border-gray-900 p-6">
              <h3 className="text-sm font-medium text-black dark:text-white mb-2">2. Maintains State Topology</h3>
              <p className="text-xs text-gray-600 dark:text-gray-500 leading-relaxed">
                Cryptographic Merkle trees link every execution event. Tamper-proof audit chains prove job continuity across time with ECDSA signatures.
              </p>
            </div>
            <div className="border border-gray-200 dark:border-gray-900 p-6">
              <h3 className="text-sm font-medium text-black dark:text-white mb-2">3. Orchestrates Execution</h3>
              <p className="text-xs text-gray-600 dark:text-gray-500 leading-relaxed">
                Manages warm pools, predictive scheduling, and checkpointing. Resume from failure points without restarting entire workflows.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
