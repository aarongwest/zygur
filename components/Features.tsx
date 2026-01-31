"use client";

const features = [
  {
    title: "Temporal State Machines",
    description: "Workflows that remember history. Tuesday's result affects Wednesday's logic. Resume from any checkpoint after failures.",
  },
  {
    title: "Cryptographic Audit Chains",
    description: "Merkle-tree linked execution logs prove exactly what ran, when, and with what result. Tamper-proof and immutable.",
  },
  {
    title: "Intelligent Orchestration",
    description: "Warm pools, predictive scheduling, and cost optimization across GPU clouds. Preload models 5 minutes before execution.",
  },
  {
    title: "Cloud-Agnostic Execution",
    description: "Compile workflows to Lambda, Replicate, Vast, or on-prem. One declarative definition, multiple backends.",
  },
  {
    title: "Event Sourcing",
    description: "Every state change stored as immutable event. Full audit trail with cryptographic verification and ECDSA signatures.",
  },
  {
    title: "Declarative Workflows",
    description: "Define automations in YAML or via TUI. DAG-based execution with branching, retries, and fan-out capabilities.",
  },
];

export function Features() {
  return (
    <section id="features" className="w-full py-16 px-6 border-t border-gray-200 dark:border-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-3 text-black dark:text-white">
            Core Capabilities
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-500 max-w-2xl">
            A distributed systems engine that guarantees "this job ran at this time with this result, provably and immutably."
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" style={{ marginLeft: '-20px' }}>
          {features.map((feature) => (
            <div
              key={feature.title}
              className="border border-gray-200 dark:border-gray-900 p-5 hover:border-gray-300 dark:hover:border-gray-800 transition-colors bg-white dark:bg-transparent"
            >
              <h3 className="text-sm font-medium text-black dark:text-white mb-2">{feature.title}</h3>
              <p className="text-xs text-gray-600 dark:text-gray-500 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
