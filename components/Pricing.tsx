"use client";

const plans = [
  {
    name: "Starter",
    price: "$0",
    period: "/month",
    description: "For developers exploring temporal workflows",
    features: [
      "Up to 100 workflows",
      "SQLite state storage",
      "1-year audit retention",
      "Community support",
      "Basic Merkle audit chains",
      "Single cloud provider",
    ],
    cta: "Get Started",
  },
  {
    name: "Professional",
    price: "$99",
    period: "/month",
    description: "For teams building production automations",
    features: [
      "Up to 1,000 workflows",
      "Postgres state storage",
      "3-year audit retention",
      "Email support",
      "Full cryptographic audit chains",
      "Multi-cloud orchestration",
      "Warm pool optimization",
      "SOC2/GDPR compliance modes",
    ],
    cta: "Start Free Trial",
  },
  {
    name: "Enterprise",
    price: "$499",
    period: "/month + compute markup",
    description: "For regulated industries requiring audit trails",
    features: [
      "Unlimited workflows",
      "Managed Postgres + Redis",
      "7-year audit retention",
      "Dedicated support + SLA",
      "HIPAA mode (BAA included)",
      "Custom compliance frameworks",
      "On-premise deployment option",
      "Predictive scheduling",
      "10-15% compute markup",
    ],
    cta: "Contact Sales",
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="w-full py-16 px-6 border-t border-gray-200 dark:border-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-3 text-black dark:text-white">
            Pricing
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-500">
            Pay for what you use. No hidden fees. Scale as you grow.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6" style={{ marginLeft: '-20px' }}>
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="border border-gray-200 dark:border-gray-900 p-6 hover:border-gray-300 dark:hover:border-gray-800 transition-colors bg-white dark:bg-transparent"
            >
              <div className="mb-6">
                <h3 className="text-sm font-medium text-black dark:text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline mb-2">
                  <span className="text-2xl font-bold text-black dark:text-white">{plan.price}</span>
                  <span className="text-xs text-gray-500 ml-1">{plan.period}</span>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-500">{plan.description}</p>
              </div>

              <ul className="space-y-2 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start text-xs text-gray-600 dark:text-gray-400">
                    <span className="mr-2">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a 
                href="mailto:sales@zygur.com" 
                className="w-full py-2 px-4 text-xs font-medium border border-gray-300 dark:border-gray-800 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors block text-center"
              >
                Contact Sales
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-xs text-gray-600 dark:text-gray-500">
            Platform fees cover the workflow engine. Compute costs (Replicate, Lambda, Vast) billed separately.{" "}
            <a href="mailto:sales@zygur.com" className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white underline">
              Contact us
            </a>
            {" "}for volume pricing.
          </p>
        </div>
      </div>
    </section>
  );
}
