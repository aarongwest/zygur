"use client";

const agents = [
  {
    name: "Zedekiah",
    role: "Orchestrator / Strategy",
    description: "Identifies product opportunities, coordinates all agents, and makes strategic decisions based on market data and agent inputs.",
    status: "In Development",
    tools: ["Opportunity Scanner", "Portfolio Planner", "Agent Orchestrator"],
  },
  {
    name: "Knucks",
    role: "Growth Agent",
    description: "Handles marketing, lead generation, content creation, and demand generation. Currently generates TikTok videos 3x daily.",
    status: "In Production",
    tools: ["Campaign Generator", "Content Scheduler", "Creative Variant Builder"],
  },
  {
    name: "Kasey",
    role: "Customer Agent",
    description: "Manages customer support, success, onboarding, and retention. Ensures customers get value from products.",
    status: "Planned",
    tools: ["Onboarding Flow Builder", "Support Copilot", "Retention Playbooks"],
  },
  {
    name: "Khristyn",
    role: "Revenue & Finance",
    description: "Handles revenue operations, accounting, billing, collections, and financial forecasting.",
    status: "Planned",
    tools: ["MRR Dashboard", "Billing Automations", "Revenue Forecast Engine"],
  },
  {
    name: "Hayli",
    role: "Product Agent",
    description: "Validates product ideas, conducts market research, manages roadmap, and prioritizes features based on data.",
    status: "Planned",
    tools: ["Idea Validator", "Roadmap Prioritizer", "Customer Signal Analyzer"],
  },
  {
    name: "Gerty",
    role: "Compliance Agent",
    description: "Manages risk, security, legal compliance, GRC processes, and safety protocols across all products.",
    status: "Planned",
    tools: ["HIPAA CLI", "SOC2 CLI", "GDPR CLI", "CCPA CLI"],
  },
];

const services = [
  {
    name: "Marketing Automation",
    description: "Automated marketing campaigns, content generation, and lead generation for your products.",
  },
  {
    name: "Software Development",
    description: "Terminal applications, web apps, iOS apps, and SaaS tools built fast with AI assistance.",
  },
  {
    name: "Product Strategy",
    description: "Opportunity identification, market validation, and go-to-market strategy for new products.",
  },
  {
    name: "Developer Tools",
    description: "CLI tools and automation utilities for developers who work in the terminal.",
  },
];

export function Products() {
  return (
    <>
      {/* Services Section */}
      <section id="services" className="w-full py-16 px-6 border-t border-[#cccccc] dark:border-[#2a2a2a]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-3 text-gray-900 dark:text-gray-100">
              Digital Services
            </h2>
            <p className="text-sm text-gray-900 dark:text-gray-100 max-w-3xl">
              Need help with something digital? Available for select projects when not shipping products.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {services.map((service) => (
              <div
                key={service.name}
                className="border border-[#cccccc] dark:border-[#2a2a2a] p-6 bg-transparent hover:border-opacity-60 transition-colors rounded"
              >
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-3">{service.name}</h3>
                <p className="text-sm text-gray-900 dark:text-gray-100">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="border border-[#cccccc] dark:border-[#2a2a2a] p-8 rounded bg-transparent">
            <div className="max-w-3xl">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">How It Works</h3>
              <p className="text-sm text-gray-900 dark:text-gray-100 mb-6">
                The agents work independently or as a coordinated system. Zedekiah identifies opportunities, Hayli validates them, Knucks markets products, Kasey supports customers, Khristyn manages revenue, and Gerty ensures compliance. Together, they power a one-person product factory.
              </p>
              <div className="text-xs text-gray-900 dark:text-gray-100 opacity-60">
                SciCo.ai is currently in development. Knucks (marketing agent) is in production and being dogfooded for internal products. Additional agents shipping throughout 2026.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Factory Section */}
      <section id="scico" className="w-full py-16 px-6 border-t border-[#cccccc] dark:border-[#2a2a2a]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-3 text-gray-900 dark:text-gray-100">
              Digital Factory
            </h2>
            <p className="text-sm text-gray-900 dark:text-gray-100 max-w-3xl">
              An AI-powered digital factory. Six agents handle every business function — from identifying opportunities to shipping products. This system enables one person to operate like a full company.
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            {agents.map((agent) => (
              <div
                key={agent.name}
                className="border border-[#cccccc] dark:border-[#2a2a2a] p-6 bg-transparent hover:border-opacity-60 transition-colors rounded"
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">{agent.name}.ai</h3>
                    <p className="text-xs text-gray-900 dark:text-gray-100 opacity-60 mt-1">{agent.role}</p>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded border ${
                    agent.status === 'In Production'
                      ? 'border-green-500 text-green-500'
                      : agent.status === 'In Development'
                      ? 'border-yellow-500 text-yellow-500'
                      : 'border-gray-500 text-gray-500'
                  }`}>
                    {agent.status}
                  </span>
                </div>

                <p className="text-sm text-gray-900 dark:text-gray-100">
                  {agent.description}
                </p>

                <div className="mt-4">
                  <p className="text-xs text-gray-900 dark:text-gray-100 opacity-60 mb-2">Tools</p>
                  <div className="flex flex-wrap gap-2">
                    {agent.tools.map((toolName) => (
                      <span
                        key={toolName}
                        className="border border-[#cccccc] dark:border-[#2a2a2a] px-2 py-1 rounded text-xs text-gray-900 dark:text-gray-100"
                      >
                        {toolName}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="border border-[#cccccc] dark:border-[#2a2a2a] p-8 rounded bg-transparent">
            <div className="max-w-3xl">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">How It Works</h3>
              <p className="text-sm text-gray-900 dark:text-gray-100 mb-6">
                The agents work independently or as a coordinated system. Zedekiah identifies opportunities, Hayli validates them, Knucks markets products, Kasey supports customers, Khristyn manages revenue, and Gerty ensures compliance. Together, they power a one-person product factory.
              </p>
              <div className="text-xs text-gray-900 dark:text-gray-100 opacity-60">
                SciCo.ai is currently in development. Knucks (marketing agent) is in production and being dogfooded for internal products. Additional agents shipping throughout 2026.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
