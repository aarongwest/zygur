"use client";

export function UseCases() {
  const tools = [
    {
      name: "Cron",
      price: "$5/mo",
      description: "Calendar + scheduler in your terminal",
      features: [
        "View your calendar without leaving the terminal",
        "Schedule tasks with natural language",
        "Get notifications on your machine",
        "Integrates with your existing calendar (Google, Outlook)",
      ]
    },
    {
      name: "Valid",
      price: "$49/yr",
      description: "AI-powered CSV/JSON validator",
      features: [
        "Catches bad data before it breaks things",
        "AI fixes common issues automatically",
        "Works from your terminal with pipes",
        "Zero external dependencies",
      ]
    },
    {
      name: "OSHA Check",
      price: "$29/mo",
      description: "Safety audits in your pocket",
      features: [
        "Voice-to-text safety checklists",
        "Generates PDF reports instantly",
        "Works offline, syncs when connected",
        "Built for the factory floor",
      ]
    },
  ];

  return (
    <section id="tools" className="w-full py-16 px-6 border-t border-gray-200 dark:border-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-3 text-black dark:text-white">
            Current Tools
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-500 max-w-2xl mx-auto">
            Useful tools. Built in Go. Designed for developers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <div key={tool.name} className="border border-gray-200 dark:border-gray-900 p-6">
              <div className="mb-4">
                <h3 className="text-lg font-bold text-black dark:text-white mb-2">{tool.name}</h3>
                <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">{tool.price}</div>
                <p className="text-xs text-gray-600 dark:text-gray-500">{tool.description}</p>
              </div>

              <ul className="space-y-2 mb-6">
                {tool.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                    <span className="text-green-500 mt-0.5">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a 
                href="#" 
                className="w-full py-2 px-4 text-xs font-medium border border-black dark:border-white text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors block text-center"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>

        {/* Related */}
        <div className="mt-12 border-t border-gray-200 dark:border-gray-900 pt-12">
          <div className="text-center">
            <p className="text-xs text-gray-600 dark:text-gray-500 mb-4">
              <strong>By day:</strong> I run <a href="https://ehs-inc.com" className="underline">EHS, Inc.</a>, building GERTY to automate compliance for factories.<br/>
              <strong>By night:</strong> I ship tools here at Zygur.
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-500">
              They share DNA: Go, terminals, and Japanese sci-fi aesthetics.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
