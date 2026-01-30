"use client";

export function CTA() {
  return (
    <section className="w-full py-16 px-6 border-t border-gray-200 dark:border-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="border border-gray-200 dark:border-gray-900 p-8 text-center bg-white dark:bg-transparent">
          <h2 className="text-2xl font-bold text-black dark:text-white mb-3">
            Ready to build compliant AI?
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-500 mb-6 max-w-2xl mx-auto">
            Join developers at leading LegalTech, FinTech, and HealthTech companies who trust Zygur for their AI infrastructure.
          </p>
          <div className="flex gap-3 justify-center">
            <a 
              href="mailto:sales@zygur.com" 
              className="border border-black dark:border-white text-black dark:text-white px-5 py-2 text-xs font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors inline-block"
            >
              Contact Sales
            </a>
            <a 
              href="/#docs" 
              className="border border-gray-300 dark:border-gray-800 px-5 py-2 text-xs text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors inline-block"
            >
              View Documentation
            </a>
          </div>
          <p className="mt-4 text-xs text-gray-600">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
}
