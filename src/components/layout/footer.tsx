import Link from "next/link"
import Image from "next/image"
import { BadgeEmbed } from "@/components/badge-embed"

export function Footer() {
  return (
    <footer className="py-8 border-t border-zinc-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
          <div>
            <h3 className="text-sm font-semibold text-zinc-100 mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/ehs?tag=tech" className="text-sm text-zinc-400 hover:text-zinc-100">
                  EHS Technology
                </Link>
              </li>
              <li>
                <Link href="/ehs?tag=services" className="text-sm text-zinc-400 hover:text-zinc-100">
                  EHS Services
                </Link>
              </li>
              <li>
                <Link href="/ehs?tag=other" className="text-sm text-zinc-400 hover:text-zinc-100">
                  More EHS Topics
                </Link>
              </li>
              <li>
                <Link href="/ehs/white-label-ehs-software" className="text-sm text-zinc-400 hover:text-zinc-100">
                  White Label EHS
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-zinc-100 mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/ehs" className="text-sm text-zinc-400 hover:text-zinc-100">
                  Articles
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-sm text-zinc-400 hover:text-zinc-100">
                  Resource Library
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-sm text-zinc-400 hover:text-zinc-100">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-sm text-zinc-400 hover:text-zinc-100">
                  Guides & Templates
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
          <div></div>
        </div>
        {/* Regulatory Agencies */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 pt-6 pb-6 border-t border-zinc-800">
          <div>
            <h3 className="text-sm font-semibold text-zinc-100 mb-4">Environmental Agencies</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://www.epa.gov" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-400 hover:text-zinc-100">
                  EPA (US)
                </a>
              </li>
              <li>
                <a href="https://www.canada.ca/en/environment-climate-change.html" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-400 hover:text-zinc-100">
                  ECCC (CA)
                </a>
              </li>
              <li>
                <a href="https://environment.ec.europa.eu" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-400 hover:text-zinc-100">
                  EEA (EU)
                </a>
              </li>
              <li>
                <a href="https://www.dcceew.gov.au" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-400 hover:text-zinc-100">
                  DCCEEW (AU)
                </a>
              </li>
              <li>
                <a href="https://www.gov.uk/government/organisations/environment-agency" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-400 hover:text-zinc-100">
                  EA (UK)
                </a>
              </li>
            </ul>
          </div>
          <div className="md:col-start-2">
            <h3 className="text-sm font-semibold text-zinc-100 mb-4">Health & Safety Agencies</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://www.osha.gov" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-400 hover:text-zinc-100">
                  OSHA (US)
                </a>
              </li>
              <li>
                <a href="https://www.ccohs.ca" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-400 hover:text-zinc-100">
                  CCOHS (CA)
                </a>
              </li>
              <li>
                <a href="https://osha.europa.eu" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-400 hover:text-zinc-100">
                  EU-OSHA (EU)
                </a>
              </li>
              <li>
                <a href="https://www.safeworkaustralia.gov.au" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-400 hover:text-zinc-100">
                  SafeWork (AU)
                </a>
              </li>
              <li>
                <a href="https://www.hse.gov.uk" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-400 hover:text-zinc-100">
                  HSE (UK)
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Badges and Copyright */}
        <div className="flex flex-col items-start pt-6 pb-6">
          {/* Registration Badges */}
          <div className="flex flex-col md:flex-row items-center gap-4 w-full">
            <div className="flex gap-4">
              <BadgeEmbed country="us">
                <div className="flex flex-col items-center gap-1">
                  <p className="text-lg font-semibold text-zinc-400">US</p>
                  <Image
                    src="/us.png"
                    alt="US Registration Badge"
                    width={40}
                    height={40}
                    className="invert opacity-50 hover:opacity-100 transition-opacity"
                  />
                </div>
              </BadgeEmbed>
              <BadgeEmbed country="ca">
                <div className="flex flex-col items-center gap-1">
                  <p className="text-lg font-semibold text-zinc-400">CA</p>
                  <Image
                    src="/ca.png"
                    alt="Canada Registration Badge"
                    width={40}
                    height={40}
                    className="invert opacity-50 hover:opacity-100 transition-opacity"
                  />
                </div>
              </BadgeEmbed>
              <BadgeEmbed country="eu">
                <div className="flex flex-col items-center gap-1">
                  <p className="text-lg font-semibold text-zinc-400">EU</p>
                  <Image
                    src="/eu.png"
                    alt="EU Registration Badge"
                    width={40}
                    height={40}
                    className="invert opacity-50 hover:opacity-100 transition-opacity"
                  />
                </div>
              </BadgeEmbed>
              <BadgeEmbed country="au">
                <div className="flex flex-col items-center gap-1">
                  <p className="text-lg font-semibold text-zinc-400">AU</p>
                  <Image
                    src="/au.png"
                    alt="Australia Registration Badge"
                    width={40}
                    height={40}
                    className="invert opacity-50 hover:opacity-100 transition-opacity"
                  />
                </div>
              </BadgeEmbed>
              <BadgeEmbed country="uk">
                <div className="flex flex-col items-center gap-1">
                  <p className="text-lg font-semibold text-zinc-400">UK</p>
                  <Image
                    src="/uk.png"
                    alt="UK Registration Badge"
                    width={40}
                    height={40}
                    className="invert opacity-50 hover:opacity-100 transition-opacity"
                  />
                </div>
              </BadgeEmbed>
            </div>
            <div className="flex gap-4 items-center md:border-l md:border-zinc-800 md:pl-4">
              <Link href="/register" className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors">
                Get Registered
              </Link>
              <span className="text-zinc-700">|</span>
              <Link href="/register?verify=true" className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors">
                Verify Registration
              </Link>
            </div>
          </div>
          <p className="text-sm text-zinc-400 mt-8">&copy; 2025 EHS, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
