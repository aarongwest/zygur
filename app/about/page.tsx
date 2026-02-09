import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-transparent text-brand-grey">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-6 text-black dark:text-white">About Zygur</h1>
        
        <div className="space-y-6 text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
          <p>
            Zygur is an <strong className="text-black dark:text-white">indie software studio</strong> shipping small, sharp CLI tools 
            for developers working in regulated industries. We focus on the problems that keep compliance teams up at night: 
            de-identification, evidence collection, PII scanning, audit trails, vendor validation, data retention, and git hygiene.
          </p>
          
          <div className="pt-6">
            <h2 className="text-xl font-bold mb-4 text-black dark:text-white">Our Approach</h2>
            <ul className="space-y-3">
              <li><strong className="text-black dark:text-white">Local-first:</strong> Everything runs on your machine. No SaaS, no cloud uploads, no vendor lock-in.</li>
              <li><strong className="text-black dark:text-white">One-time pricing:</strong> Buy it once, use it forever. No subscriptions, no usage limits, no surprise bills.</li>
              <li><strong className="text-black dark:text-white">Self-serve:</strong> Credit card at signup. No sales calls. No procurement committees. Buy at 2am with a corporate card.</li>
              <li><strong className="text-black dark:text-white">Built in Go:</strong> Fast, compiled binaries with zero dependencies. Easy to install and integrate into CI/CD pipelines.</li>
              <li><strong className="text-black dark:text-white">CLI native:</strong> Works with pipes, scripts, and automation. No web dashboards. Respects developer workflows.</li>
            </ul>
          </div>
          
          <div className="pt-6">
            <h2 className="text-xl font-bold mb-4 text-black dark:text-white">The Tools</h2>
            
            <div className="space-y-3">
              <p>
                We currently ship 7 CLI tools for healthcare, fintech, legal, and government teams:
              </p>
              <ul className="space-y-2 text-xs text-gray-600 dark:text-gray-500">
                <li><strong className="text-black dark:text-white">Safe Harbor</strong> — HIPAA de-identification validator ($49)</li>
                <li><strong className="text-black dark:text-white">Evidence</strong> — SOC2 evidence package generator ($99)</li>
                <li><strong className="text-black dark:text-white">PiiGrep</strong> — Hardcoded PII scanner for CI/CD ($29)</li>
                <li><strong className="text-black dark:text-white">AuditDiff</strong> — Database change tracker for audits ($79)</li>
                <li><strong className="text-black dark:text-white">BAA-Check</strong> — Vendor BAA whitelist validator ($39)</li>
                <li><strong className="text-black dark:text-white">Retention</strong> — GDPR/CCPA record deletion automation ($149)</li>
                <li><strong className="text-black dark:text-white">Guardrail</strong> — Git pre-commit PHI blocker ($19)</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-6">
            <h2 className="text-xl font-bold mb-4 text-black dark:text-white">Why CLI Tools?</h2>
            <p>
              Web platforms require accounts, authentication, cloud infrastructure, and enterprise sales processes. 
              Compliance teams don't have time for that. They need tools that integrate into their existing workflows—pipelines, 
              scripts, and CI/CD systems. A CLI tool that runs locally, costs under $200, and requires no setup is what 
              actually gets used.
            </p>
          </div>
          
          <div className="pt-6">
            <h2 className="text-xl font-bold mb-4 text-black dark:text-white">Target Customer</h2>
            <p>
              We build for developers at HealthTech startups, B2B SaaS companies, fintech firms, and government contractors 
              who need to meet compliance requirements (HIPAA, SOC2, GDPR, PCI, etc.) but can't afford enterprise compliance 
              platforms and don't want to hire whole teams to manage audit processes.
            </p>
          </div>
          
          <div className="pt-8">
            <h2 className="text-xl font-bold mb-4 text-black dark:text-white">Get Started</h2>
            <p className="mb-4">
              Browse our tools on GitHub, pick what you need, and buy at checkout.
            </p>
            <a 
              href="https://github.com/zygur" 
              className="inline-block border border-black dark:border-white text-black dark:text-white px-6 py-3 text-sm font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
            >
              Browse on GitHub
            </a>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
