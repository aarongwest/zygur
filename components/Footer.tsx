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
    <footer className="w-full bg-white dark:bg-[#1a1a1a] border-t border-[#cccccc] dark:border-[#2a2a2a]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <img src="/logo.png" alt="Zygur" className="h-6 mb-3 invert dark:invert-0" />
            <p className="text-xs text-[#666666] dark:text-[#999999] max-w-sm">
              CLI tools for regulated developers. HIPAA, SOC2, GDPR compliant. Local-first. One-time pricing.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-xs font-medium text-[#1a1a1a] dark:text-[#e5e5e5] uppercase tracking-wider mb-3">
                {category}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-xs text-[#666666] dark:text-[#999999] hover:text-[#1a1a1a] dark:hover:text-[#e5e5e5] transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-[#666666] dark:text-[#999999]">
            © 2024 Zygur Technologies Corp. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="/privacy" className="text-xs text-[#666666] dark:text-[#999999] hover:opacity-60 transition-opacity">
              Privacy Policy
            </a>
            <a href="/terms" className="text-xs text-[#666666] dark:text-[#999999] hover:opacity-60 transition-opacity">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
