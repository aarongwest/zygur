"use client";

export function CTA() {
  return (
    <section className="w-full py-16 px-6 border-t border-gray-200 dark:border-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="border-2 border-black dark:border-white p-12 text-center bg-black dark:bg-white">
          <h2 className="text-3xl font-bold text-white dark:text-black mb-4">
            Here's The Reality.
          </h2>
          <p className="text-lg text-gray-300 dark:text-gray-700 mb-8 max-w-2xl mx-auto">
            Your competition is posting consistently. They're everywhere. You're nowhere. Every day you wait is a day they own more of your market. Pick your path. Let's go.
          </p>
          <div className="flex gap-4 justify-center">
            <a 
              href="#pricing" 
              className="border-2 border-white dark:border-black bg-white dark:bg-black text-black dark:text-white px-8 py-4 text-sm font-bold hover:opacity-90 transition-opacity inline-block"
            >
              I'll Build It (Hayli AI)
            </a>
            <a 
              href="#pricing" 
              className="border-2 border-white dark:border-black text-white dark:text-black px-8 py-4 text-sm font-bold hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white transition-colors inline-block"
            >
              You Own It (Hire Zygur)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
