"use client";

export function CTA() {
  return (
    <section className="w-full py-16 px-6 border-t border-gray-200 dark:border-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="border border-black dark:border-white p-12 text-center">
          <h2 className="text-3xl font-bold text-black dark:text-white mb-4">
            Here's The Reality.
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Your competition is posting consistently. They're everywhere. You're nowhere. Every day you wait is a day they own more of your market. Pick your path. Let's go.
          </p>
          <div className="flex gap-4 justify-center">
            <a 
              href="#pricing" 
              className="border border-black dark:border-white text-black dark:text-white px-8 py-4 text-sm font-bold hover:border-gray-600 dark:hover:border-gray-400 transition-colors inline-block"
            >
              I'll Build It (Hayli AI)
            </a>
            <a 
              href="#pricing" 
              className="border border-black dark:border-white text-black dark:text-white px-8 py-4 text-sm font-bold hover:border-gray-600 dark:hover:border-gray-400 transition-colors inline-block"
            >
              You Own It (Hire Zygur)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
