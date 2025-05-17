import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-12 border-t border-zinc-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Column 1: Services */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-100 mb-4">Fractional CMO Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services/strategy" className="text-sm text-zinc-400 hover:text-zinc-100">
                  Marketing Strategy
                </Link>
              </li>
              <li>
                <Link href="/services/execution" className="text-sm text-zinc-400 hover:text-zinc-100">
                  Marketing Execution
                </Link>
              </li>
              <li>
                <Link href="/services/optimization" className="text-sm text-zinc-400 hover:text-zinc-100">
                  Growth Optimization
                </Link>
              </li>
              <li>
                <Link href="/services/ai-enhanced-marketing" className="text-sm text-zinc-400 hover:text-zinc-100">
                  AI-Enhanced Marketing
                </Link>
              </li>
              <li>
                <Link href="/services/b2b-marketing" className="text-sm text-zinc-400 hover:text-zinc-100">
                  B2B Marketing Services
                </Link>
              </li>
              <li>
                <Link href="/services/research-development" className="text-sm text-zinc-400 hover:text-zinc-100">
                  Industry Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/cmo-as-a-service" className="text-sm text-zinc-400 hover:text-zinc-100">
                  CMO as a Service
                </Link>
              </li>
              <li>
                <Link href="/services/fractional-marketing-team" className="text-sm text-zinc-400 hover:text-zinc-100">
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
                <Link href="/industries/saas-fractional-cmo" className="text-sm text-zinc-400 hover:text-zinc-100">
                  SaaS Fractional CMO
                </Link>
              </li>
              <li>
                <Link href="/industries/manufacturing-fractional-cmo" className="text-sm text-zinc-400 hover:text-zinc-100">
                  Manufacturing Marketing
                </Link>
              </li>
              <li>
                <Link href="/industries/professional-services-fractional-cmo" className="text-sm text-zinc-400 hover:text-zinc-100">
                  Professional Services
                </Link>
              </li>
              <li>
                <Link href="/industries/ecommerce-fractional-cmo" className="text-sm text-zinc-400 hover:text-zinc-100">
                  E-commerce Marketing
                </Link>
              </li>
              <li>
                <Link href="/industries/fractional-cmo-for-startups" className="text-sm text-zinc-400 hover:text-zinc-100">
                  Startups Marketing
                </Link>
              </li>
              <li>
                <Link href="/industries/b2b-fractional-cmo" className="text-sm text-zinc-400 hover:text-zinc-100">
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
                <Link href="/resources/what-is-a-fractional-cmo" className="text-sm text-zinc-400 hover:text-zinc-100">
                  What is a Fractional CMO?
                </Link>
              </li>
              <li>
                <Link href="/pricing/fractional-cmo-cost" className="text-sm text-zinc-400 hover:text-zinc-100">
                  Fractional CMO Cost
                </Link>
              </li>
              <li>
                <Link href="/compare/fractional-cmo-vs-agency" className="text-sm text-zinc-400 hover:text-zinc-100">
                  Fractional CMO vs Agency
                </Link>
              </li>
              <li>
                <Link href="/compare/fractional-cmo-vs-full-time" className="text-sm text-zinc-400 hover:text-zinc-100">
                  Fractional CMO vs Full-Time
                </Link>
              </li>
              <li>
                <Link href="/resources/find-a-fractional-cmo" className="text-sm text-zinc-400 hover:text-zinc-100">
                  Find a Fractional CMO
                </Link>
              </li>
              <li>
                <Link href="/resources/fractional-marketing-executive" className="text-sm text-zinc-400 hover:text-zinc-100">
                  Fractional Marketing Executive
                </Link>
              </li>
              <li>
                <Link href="/results/case-studies" className="text-sm text-zinc-400 hover:text-zinc-100">
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
                <Link href="/" className="text-sm text-zinc-400 hover:text-zinc-100">
                  Fractional CMO Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-zinc-400 hover:text-zinc-100">
                  About Your Fractional CMO
                </Link>
              </li>
              <li>
                <Link href="/approach" className="text-sm text-zinc-400 hover:text-zinc-100">
                  Fractional CMO Approach
                </Link>
              </li>
              <li>
                <Link href="/results" className="text-sm text-zinc-400 hover:text-zinc-100">
                  Marketing Results
                </Link>
              </li>
              <li>
                <Link href="/company/contact" className="text-sm text-zinc-400 hover:text-zinc-100">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/company/careers" className="text-sm text-zinc-400 hover:text-zinc-100">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/company/partners" className="text-sm text-zinc-400 hover:text-zinc-100">
                  Partners
                </Link>
              </li>
              <li>
                <Link href="/company/press" className="text-sm text-zinc-400 hover:text-zinc-100">
                  Press
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 5: Legal & Support */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-100 mb-4">Legal & Support</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-sm text-zinc-400 hover:text-zinc-100">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-zinc-400 hover:text-zinc-100">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/security" className="text-sm text-zinc-400 hover:text-zinc-100">
                  Security
                </Link>
              </li>
              {/* Compliance link hidden per request */}
              {/* Login link hidden per request */}
              <li>
                <Link href="/call" className="text-sm text-zinc-400 hover:text-zinc-100">
                  Schedule a Call
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-800">
          <p className="text-sm text-zinc-400 mb-4 md:mb-0">&copy; 2025 Zygur Technologies Corp. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="/" className="text-sm text-zinc-400 hover:text-zinc-100">
              Fractional CMO
            </Link>
            <Link href="/services" className="text-sm text-zinc-400 hover:text-zinc-100">
              Fractional CMO Services
            </Link>
            <Link href="/call" className="text-sm text-zinc-400 hover:text-zinc-100">
              Hire a Fractional CMO
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
