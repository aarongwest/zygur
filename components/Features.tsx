"use client";

const features = [
  {
    title: "Built by AI Agents",
    description: "We're not a 20-person team. We're one founder + six AI agents. Zed plans products. Hayli builds frontends. Knucks handles backends. Kasey tests. Khristyn deploys. Gerty secures. This lets us ship monthly at a fraction of traditional cost.",
  },
  {
    title: "Shipped Monthly",
    description: "New compliance tool every month. We started with 7 tools. By end of year, we'll have 19. Subscribe once, get everything we ever build. Forever.",
  },
  {
    title: "Local-First",
    description: "Your sensitive data never leaves your infrastructure. All tools run locally on your machine or in your environment. No cloud uploads. No third-party servers. You're in control.",
  },
  {
    title: "One-Time Pricing",
    description: "Buy a tool once, use it forever. Or subscribe for $29/mo and get everything. No forced upgrades. No subscription fatigue. No sales calls. Buy at 2am with a corporate card.",
  },
  {
    title: "HIPAA, SOC2, GDPR, CCPA",
    description: "Built for regulated industries. Healthcare, fintech, legal, government. If you handle PII, PHI, or sensitive data, these tools keep you compliant and out of trouble.",
  },
  {
    title: "Terminal-First",
    description: "CLI tools that fit into your workflow. No dashboards. No bloat. Just fast, focused tools that do one thing well. Perfect for CI/CD, cron jobs, and automation.",
  },
];

export function Features() {
  return (
    <section id="features" className="w-full py-16 px-6 border-t border-brand-grey">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-3 text-brand-grey">
            How We Ship So Fast
          </h2>
          <p className="text-sm text-brand-grey max-w-2xl">
            Most companies take months to ship a single tool. We ship one every month. Here's how.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" style={{ marginLeft: '-20px' }}>
          {features.map((feature) => (
            <div
              key={feature.title}
              className="border border-brand-grey p-5 hover:border-opacity-60 transition-colors bg-transparent rounded"
            >
              <h3 className="text-sm font-medium text-brand-grey mb-2">{feature.title}</h3>
              <p className="text-xs text-brand-grey leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
