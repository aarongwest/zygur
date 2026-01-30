"use client";

export function Comparison() {
  return (
    <section className="w-full py-16 px-6 border-t border-gray-200 dark:border-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-3 text-black dark:text-white">
            Why Developers Choose Zygur
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-500 max-w-2xl mx-auto">
            Stop choosing between cost and compliance. Get both with Zygur.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {/* AWS/Azure */}
            <div className="border border-gray-900 p-6">
              <div className="text-center mb-4">
                <h3 className="text-sm font-medium text-gray-400 mb-2">AWS / Azure / GCP</h3>
                <div className="text-xs text-gray-600">Traditional Cloud</div>
              </div>
              <ul className="space-y-3 text-xs">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">✗</span>
                  <span className="text-gray-500">Expensive ($4-8/hr for A100)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">✗</span>
                  <span className="text-gray-500">Complex setup (weeks)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">✗</span>
                  <span className="text-gray-500">Manual compliance work</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">✗</span>
                  <span className="text-gray-500">Vendor lock-in</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span className="text-gray-400">SOC2/HIPAA certified</span>
                </li>
              </ul>
            </div>

            {/* GPU Providers */}
            <div className="border border-gray-900 p-6">
              <div className="text-center mb-4">
                <h3 className="text-sm font-medium text-gray-400 mb-2">Lambda / Vast.ai</h3>
                <div className="text-xs text-gray-600">GPU Providers</div>
              </div>
              <ul className="space-y-3 text-xs">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span className="text-gray-400">Cheap ($2-3/hr for A100)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span className="text-gray-400">Fast setup (minutes)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">✗</span>
                  <span className="text-gray-500">No compliance certification</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">✗</span>
                  <span className="text-gray-500">No audit logging</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">✗</span>
                  <span className="text-gray-500">Can't sell to enterprises</span>
                </li>
              </ul>
            </div>

            {/* Zygur */}
            <div className="border border-gray-800 p-6">
              <div className="text-center mb-4">
                <h3 className="text-sm font-medium text-white mb-2">Zygur</h3>
                <div className="text-xs text-gray-500">Best of Both</div>
              </div>
              <ul className="space-y-3 text-xs">
                <li className="flex items-start gap-2">
                  <span className="text-white mt-0.5">✓</span>
                  <span className="text-gray-400">Cheap (routes to best price)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white mt-0.5">✓</span>
                  <span className="text-gray-400">Fast setup (one command)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white mt-0.5">✓</span>
                  <span className="text-gray-400">SOC2/HIPAA/GDPR compliant</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white mt-0.5">✓</span>
                  <span className="text-gray-400">Automatic audit logging</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white mt-0.5">✓</span>
                  <span className="text-gray-400">Enterprise-ready</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Stats */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center border border-gray-200 dark:border-gray-900 p-6 bg-white dark:bg-transparent">
              <div className="text-3xl font-bold text-black dark:text-white mb-2">60%</div>
              <div className="text-xs text-gray-600 dark:text-gray-500">Cost Savings vs. AWS</div>
            </div>
            <div className="text-center border border-gray-200 dark:border-gray-900 p-6 bg-white dark:bg-transparent">
              <div className="text-3xl font-bold text-black dark:text-white mb-2">10x</div>
              <div className="text-xs text-gray-600 dark:text-gray-500">Faster Audit Reports</div>
            </div>
            <div className="text-center border border-gray-200 dark:border-gray-900 p-6 bg-white dark:bg-transparent">
              <div className="text-3xl font-bold text-black dark:text-white mb-2">1 min</div>
              <div className="text-xs text-gray-600 dark:text-gray-500">Setup Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
