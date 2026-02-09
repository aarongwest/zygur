"use client";

const features = [
  {
    title: "The Real Problem",
    description: "You're bleeding visibility because social media requires omnipresence. Every platform has different algorithms. Different posting times. You're drowning.",
  },
  {
    title: "Stop Playing Small",
    description: "Most people lose because they try to manage it themselves. Consistency dies. Momentum dies. Your visibility dies. We don't let that happen.",
  },
  {
    title: "Face-Melting Copy",
    description: "Generic AI produces generic mediocrity. We generate copy that makes people STOP scrolling. That makes them click. That WORKS.",
  },
  {
    title: "Every Platform. Every Time.",
    description: "Twitter optimized for Twitter. LinkedIn for LinkedIn. Auto-adapted. Auto-scheduled. Running 24/7 without you lifting a finger.",
  },
  {
    title: "Watch It Work",
    description: "Posts hit peak engagement windows automatically. No more posting at 3am wondering who's seeing it. Strategy. Math. Results.",
  },
  {
    title: "Your Secret Weapon",
    description: "Hayli AI is what we use internally at Zygur. The tool that powers our visibility machine. Now you can own it. Or hire us to wield it.",
  },
];

export function Features() {
  return (
    <section id="features" className="w-full py-16 px-6 border-t border-brand-grey">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-3 text-brand-grey">
            The Complexity Is The Enemy
          </h2>
          <p className="text-sm text-brand-grey max-w-2xl">
            Most people fail at social because they treat it like a hobby. We treat it like a machine. Built right, it runs itself. That's the difference between invisible and unstoppable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" style={{ marginLeft: '-20px' }}>
          {features.map((feature) => (
            <div
              key={feature.title}
              className="border border-brand-grey p-5 hover:border-opacity-60 transition-colors bg-transparent"
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
