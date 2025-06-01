import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-12 border-t border-zinc-800 bg-gradient-to-b from-transparent to-dark-green/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Column 1: Services */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-100 mb-4">Fractional CMO Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services/strategy" className="text-sm text-zinc-400 hover:text-accent-orange">
                  Marketing Strategy
                </Link>
              </li>
              <li>
                <Link href="/services/execution" className="text-sm text-zinc-400 hover:text-accent-orange">
                  Marketing Execution
                </Link>
              </li>
              <li>
                <Link href="/services/optimization" className="text-sm text-zinc-400 hover:text-accent-orange">
                  Growth Optimization
                </Link>
              </li>
              <li>
                <Link href="/services/ai-enhanced-marketing" className="text-sm text-zinc-400 hover:text-accent-orange">
                  AI-Enhanced Marketing
                </Link>
              </li>
              <li>
                <Link href="/services/b2b-marketing" className="text-sm text-zinc-400 hover:text-accent-orange">
                  B2B Marketing Services
                </Link>
              </li>
              <li>
                <Link href="/services/research-development" className="text-sm text-zinc-400 hover:text-accent-orange">
                  Industry Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/cmo-as-a-service" className="text-sm text-zinc-400 hover:text-accent-orange">
                  CMO as a Service
                </Link>
              </li>
              <li>
                <Link href="/services/fractional-marketing-team" className="text-sm text-zinc-400 hover:text-accent-orange">
                  Fractional Marketing Team
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 2: Industries */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-100 mb-4">Industries</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/industries/saas-fractional-cmo" className="text-sm text-zinc-400 hover:text-accent-yellow">
                  SaaS Fractional CMO
                </Link>
              </li>
              <li>
                <Link href="/industries/manufacturing-fractional-cmo" className="text-sm text-zinc-400 hover:text-accent-yellow">
                  Manufacturing Marketing
                </Link>
              </li>
              <li>
                <Link href="/industries/professional-services-fractional-cmo" className="text-sm text-zinc-400 hover:text-accent-yellow">
                  Professional Services
                </Link>
              </li>
              <li>
                <Link href="/industries/ecommerce-fractional-cmo" className="text-sm text-zinc-400 hover:text-accent-yellow">
                  E-commerce Marketing
                </Link>
              </li>
              <li>
                <Link href="/industries/fractional-cmo-for-startups" className="text-sm text-zinc-400 hover:text-accent-yellow">
                  Startups Marketing
                </Link>
              </li>
              <li>
                <Link href="/industries/b2b-fractional-cmo" className="text-sm text-zinc-400 hover:text-accent-yellow">
                  B2B Marketing Leader
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 3: Resources */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-100 mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/resources/what-is-a-fractional-cmo" className="text-sm text-zinc-400 hover:text-accent-orange">
                  What is a Fractional CMO?
                </Link>
              </li>
              <li>
                <Link href="/pricing/fractional-cmo-cost" className="text-sm text-zinc-400 hover:text-accent-orange">
                  Fractional CMO Cost
                </Link>
              </li>
              <li>
                <Link href="/compare/fractional-cmo-vs-agency" className="text-sm text-zinc-400 hover:text-accent-orange">
                  Fractional CMO vs Agency
                </Link>
              </li>
              <li>
                <Link href="/compare/fractional-cmo-vs-full-time" className="text-sm text-zinc-400 hover:text-accent-orange">
                  Fractional CMO vs Full-Time
                </Link>
              </li>
              <li>
                <Link href="/resources/find-a-fractional-cmo" className="text-sm text-zinc-400 hover:text-accent-orange">
                  Find a Fractional CMO
                </Link>
              </li>
              <li>
                <Link href="/resources/fractional-marketing-executive" className="text-sm text-zinc-400 hover:text-accent-orange">
                  Fractional Marketing Executive
                </Link>
              </li>
              <li>
                <Link href="/results/case-studies" className="text-sm text-zinc-400 hover:text-accent-orange">
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 4: Company */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-100 mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm text-zinc-400 hover:text-accent-yellow">
                  Fractional CMO Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-zinc-400 hover:text-accent-yellow">
                  About Your Fractional CMO
                </Link>
              </li>
              <li>
                <Link href="/approach" className="text-sm text-zinc-400 hover:text-accent-yellow">
                  Fractional CMO Approach
                </Link>
              </li>
              <li>
                <Link href="/results" className="text-sm text-zinc-400 hover:text-accent-yellow">
                  Marketing Results
                </Link>
              </li>
              <li>
                <Link href="/company/contact" className="text-sm text-zinc-400 hover:text-accent-yellow">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/company/careers" className="text-sm text-zinc-400 hover:text-accent-yellow">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/company/partners" className="text-sm text-zinc-400 hover:text-accent-yellow">
                  Partners
                </Link>
              </li>
              <li>
                <Link href="/company/press" className="text-sm text-zinc-400 hover:text-accent-yellow">
                  Press
                </Link>
              </li>
              <li>
                <Link href="/labs" className="text-sm text-zinc-400 hover:text-accent-yellow">
                  Labs
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 5: Legal & Support */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-100 mb-4">Legal & Support</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-sm text-zinc-400 hover:text-accent-orange">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-zinc-400 hover:text-accent-orange">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/security" className="text-sm text-zinc-400 hover:text-accent-orange">
                  Security
                </Link>
              </li>
              {/* Compliance link hidden per request */}
              {/* Login link hidden per request */}
              <li>
                <Link href="/call" className="text-sm text-zinc-400 hover:text-accent-orange">
                  Schedule a Call
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-800">
          <p className="text-sm text-zinc-400 mb-4 md:mb-0">&copy; 2025 Zygur Technologies Corp. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="/" className="text-sm text-zinc-400 hover:text-accent-orange">
              Fractional CMO
            </Link>
            <Link href="/services" className="text-sm text-zinc-400 hover:text-accent-orange">
              Fractional CMO Services
            </Link>
            <Link href="/call" className="text-sm text-zinc-400 hover:text-accent-yellow">
              Hire a Fractional CMO
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
