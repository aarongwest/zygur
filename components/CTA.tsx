"use client";

export function CTA() {
  return (
    <section className="w-full py-16 px-6 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Building in Public
          </h2>
          <p className="text-lg text-gray-900 dark:text-gray-100 mb-8 max-w-2xl mx-auto">
            We're shipping a new compliance tool every month. Follow along on X/Twitter to see how we build with AI agents. Or subscribe to get every tool we ever ship.
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="https://x.com/zygur_ai"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-gray-100 px-8 py-4 text-sm font-bold hover:opacity-80 transition-opacity inline-block rounded"
            >
              Follow on X
            </a>
            <a
              href="mailto:aaron@zygur.com"
              className="border border-gray-200 dark:border-gray-800 bg-gray-900 dark:bg-gray-100 text-white dark:text-black px-8 py-4 text-sm font-bold hover:opacity-80 transition-opacity inline-block rounded"
            >
              Get All-Access
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
