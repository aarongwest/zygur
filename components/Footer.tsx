"use client";

const footerLinks = {
  product: [
    { name: "Features", href: "/#features" },
    { name: "Tools", href: "/#products" },
    { name: "GitHub", href: "https://github.com/zygur" },
  ],
  resources: [
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 dark:border-gray-900 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <img src="/logo.png" alt="Zygur" className="h-6 mb-3 invert dark:invert-0" />
            <p className="text-xs text-gray-600 dark:text-gray-500 max-w-sm">
              CLI tools for regulated developers. HIPAA, SOC2, GDPR compliant. Local-first. One-time pricing.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                {category}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-xs text-gray-600 dark:text-gray-600 hover:text-black dark:hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-900 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-600">
            © 2024 Zygur Technologies Corp. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="/privacy" className="text-xs text-gray-600 hover:text-black dark:hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-xs text-gray-600 hover:text-black dark:hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
