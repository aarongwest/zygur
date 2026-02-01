"use client";

const features = [
  {
    title: "Built in Go",
    description: "Fast, compiled binaries with zero dependencies. Single command to install and use.",
  },
  {
    title: "Local-First",
    description: "Everything runs on your machine. No data sent to cloud. No vendor lock-in.",
  },
  {
    title: "One-Time Pricing",
    description: "Buy once, use forever. No subscriptions. No usage limits. No surprise bills.",
  },
  {
    title: "Self-Serve Purchasing",
    description: "Credit card at signup. No sales calls. No procurement approval needed. Buy at 2am.",
  },
  {
    title: "Audit-Ready",
    description: "Designed for regulated teams. HIPAA, SOC2, GDPR compliance built in.",
  },
  {
    title: "CLI Native",
    description: "Pipes, scripts, automation. Works with your existing tools. No web dashboards.",
  },
];

export function Features() {
  return (
    <section id="features" className="w-full py-16 px-6 border-t border-gray-200 dark:border-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-3 text-black dark:text-white">
            Why Zygur
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-500 max-w-2xl">
            Tools designed specifically for regulated developers. No bloat. No compliance theater.
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
