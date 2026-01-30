"use client";

const features = [
  {
    title: "Automatic Compliance",
    description: "Every GPU job is automatically logged with tamper-proof audit trails. SOC2, HIPAA, and GDPR ready out of the box.",
  },
  {
    title: "Cost Optimization",
    description: "Smart routing to the cheapest available GPU provider. Save up to 60% with spot instance arbitrage.",
  },
  {
    title: "Audit Reports",
    description: "Generate compliance reports with one command. Pass audits in minutes, not weeks.",
  },
  {
    title: "Multi-Cloud Routing",
    description: "Route to Lambda, Replicate, Vast.ai, or CoreWeave. One API, multiple backends.",
  },
  {
    title: "Enterprise Security",
    description: "End-to-end encryption, BAAs included, and data residency controls. Built for regulated industries.",
  },
  {
    title: "Usage Analytics",
    description: "Real-time cost tracking and usage insights. Know exactly where every dollar goes.",
  },
];

export function Features() {
  return (
    <section id="features" className="w-full py-16 px-6 border-t border-gray-200 dark:border-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-3 text-black dark:text-white">
            Features
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-500 max-w-2xl">
            Built for developers in regulated industries who need to move fast without breaking compliance.
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
