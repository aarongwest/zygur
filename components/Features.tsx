"use client";

const features = [
  {
    title: "AI Agent Powered",
    description: "Not a 20-person team. One founder + six AI agents. Zedekiah strategizes, Hayli validates, Knucks markets, Kasey supports, Khristyn manages revenue, Gerty ensures compliance. Ship products 10x faster.",
  },
  {
    title: "Product Factory Model",
    description: "Don't bet on one product. Ship multiple products per month across different verticals. Take multiple shots on goal. Double down on winners, kill losers fast.",
  },
  {
    title: "Terminal-First",
    description: "CLI tools that fit your workflow. No dashboards, no bloat. Fast, focused tools that do one thing well. Perfect for automation and CI/CD pipelines.",
  },
  {
    title: "Rapid Validation",
    description: "Ship in days, not months. Test ideas fast with real revenue. Market validation comes from paying customers, not surveys. Iterate or pivot based on data.",
  },
  {
    title: "Solo Operation",
    description: "No employees. No overhead. No meetings. Just building. AI agents handle marketing, support, revenue ops, and compliance. Maximum leverage for one person.",
  },
  {
    title: "Multiple Income Streams",
    description: "Mix of one-time purchases, subscriptions, and client services. Diversified revenue reduces risk. SciCo.ai agents eventually become the product themselves.",
  },
];

export function Features() {
  return (
    <section id="features" className="w-full py-16 px-6 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
            How We Ship So Fast
          </h2>
          <p className="text-sm text-gray-900 dark:text-gray-100 max-w-2xl">
            Most solo founders ship one product per year. We ship multiple products per month. Here's the system.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="border border-gray-200 dark:border-gray-800 p-5 hover:border-opacity-60 transition-colors bg-transparent rounded"
            >
              <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">{feature.title}</h3>
              <p className="text-xs text-gray-900 dark:text-gray-100 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
