"use client";

const features = [
  {
    title: "Built in Go",
    description: "Fast, compiled binaries with zero dependencies. Single command to install and use.",
  },
  {
    title: "Terminal-First Design",
    description: "Works from your shell with pipes, scripts, and automation. No web dashboard required.",
  },
  {
    title: "Self-Serve Pricing",
    description: "Credit card at signup. No sales calls. No enterprise pricing. Simple and transparent.",
  },
  {
    title: "Useful, Not Bloated",
    description: "Each tool solves one problem well. No feature creep. No complexity you don't need.",
  },
  {
    title: "Developer-Focused",
    description: "Made by developers for developers. Respects your workflow and your time.",
  },
  {
    title: "Actively Maintained",
    description: "Regular updates. User-driven roadmap. Responsive to feedback.",
  },
];

export function Features() {
  return (
    <section id="features" className="w-full py-16 px-6 border-t border-gray-200 dark:border-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-3 text-black dark:text-white">
            What We Build
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-500 max-w-2xl">
            Tools that work the way developers expect. Fast. Simple. Honest pricing.
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
