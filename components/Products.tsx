"use client";

const products = [
  {
    type: "hayli",
    name: "Hayli AI",
    subtitle: "Build It Your Way",
    price: "$49",
    billing: "month",
    description: "The internal tool we use to automate our social visibility. Terminal-first. You own everything. Bring your API keys.",
    features: [
      "CLI tool (no dashboards, no bloat)",
      "Bring your own AI (OpenAI/Claude/Gemini)",
      "Unlimited post generation",
      "Auto-generated matching images",
      "Cron scheduling (posts run while you sleep)",
      "Multi-platform support (Twitter, LinkedIn, Bluesky, TikTok)",
      "Batch CSV processing",
      "License key activation",
    ],
    bestFor: "Developers. People who want control. Indie hackers. Solopreneurs.",
    cta: "Get Your License Key",
  },
  {
    type: "zygur",
    name: "Zygur",
    subtitle: "We Take The Wheel",
    price: "$2,500",
    billing: "month",
    description: "You tell us your goals. We own your social visibility. Strategy. Copy. Design. Posting. Results.",
    features: [
      "Weekly strategy sessions",
      "Content calendar (4-6 weeks ahead)",
      "Copy written by people who know your game",
      "Professional design + imagery",
      "Cross-platform optimization",
      "Scheduled posting (all platforms, peak times)",
      "Monthly performance analytics",
      "Unlimited revisions",
      "Your personal growth strategist",
    ],
    bestFor: "Serious founders. Consultants. Agencies. People who delegate to dominate.",
    cta: "Let's Talk",
  },
];

export function Products() {
  return (
    <section id="pricing" className="w-full py-16 px-6 border-t border-gray-200 dark:border-gray-900">
      <div className="max-w-7x3xl font-bold mb-3 text-black dark:text-white">
            Pick Your Path
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-500 max-w-3xl">
            Build it yourself with our internal tool. Or hire us to completely own your social machine. Either way: You stop being invisible. Your competition gets nervous. Your visibility becomes unstoppable
          <p className="text-sm text-gray-600 dark:text-gray-500 max-w-2xl">
            Go DIY with Hayli AI, or let Zygur handle your entire content strategy.
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
          {products.map((product) => (
            <div
              key={product.type}
              className="border border-gray-200 dark:border-gray-900 p-8 bg-white dark:bg-transparent hover:border-gray-300 dark:hover:border-gray-800 transition-colors"
            >
              <div className="mb-2">
                <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">{product.subtitle}</span>
              </div>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-3xl font-bold text-black dark:text-white">{product.name}</h3>
              </div>
              
              <div className="mb-6">
                <span className="text-4xl font-bold text-black dark:text-white">{product.price}</span>
                <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">/{product.billing}</span>
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                {product.description}
              </p>

              <div className="mb-6 pb-6 border-b border-gray-200 dark:border-gray-900">
                <p className="text-xs font-medium text-gray-500 dark:text-gray-500 mb-2">Best For</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">{product.bestFor}</p>
              </div>

              <div className="mb-8">
                <p className="text-xs font-medium text-gray-500 dark:text-gray-500 mb-3 uppercase">Includes</p>
                <ul className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="text-xs text-gray-600 dark:text-gray-400 flex items-start gap-2">
                      <span className="text-green-600 dark:text-green-400 mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#contact"
                className="w-full border border-black dark:border-white text-black dark:text-white px-4 py-3 text-xs font-medium text-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors inline-block"
              >
                {product.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
