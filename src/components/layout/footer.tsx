import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-8 border-t border-zinc-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-sm font-semibold text-zinc-100 mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services/research-development" className="text-sm text-zinc-400 hover:text-zinc-100">
                  Research & Development
                </Link>
              </li>
              <li>
                <Link href="/services/defense-military" className="text-sm text-zinc-400 hover:text-zinc-100">
                  Defense & Military Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/agentic-ai" className="text-sm text-zinc-400 hover:text-zinc-100">
                  Agentic AI
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-zinc-100 mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/login" className="text-sm text-zinc-400 hover:text-zinc-100">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/login" className="text-sm text-zinc-400 hover:text-zinc-100">
                  Research Papers
                </Link>
              </li>
              <li>
                <Link href="/login" className="text-sm text-zinc-400 hover:text-zinc-100">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/labs" className="text-sm text-zinc-400 hover:text-zinc-100">
                  Labs
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-zinc-100 mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/company/about" className="text-sm text-zinc-400 hover:text-zinc-100">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/company/careers" className="text-sm text-zinc-400 hover:text-zinc-100">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/company/contact" className="text-sm text-zinc-400 hover:text-zinc-100">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/company/partners" className="text-sm text-zinc-400 hover:text-zinc-100">
                  Partners
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-zinc-100 mb-4">Legal</h3>
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
              <li>
                <Link href="/compliance" className="text-sm text-zinc-400 hover:text-zinc-100">
                  Compliance
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between items-center pt-8 border-t border-zinc-800">
          <p className="text-sm text-zinc-400">&copy; 2025 Zygur Technologies Corp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
