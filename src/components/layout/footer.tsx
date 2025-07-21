import Link from "next/link"
import { PasswordLink } from "../password-link"

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-black border-t border-zinc-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-zinc-400 text-sm mb-4 md:mb-0">
            © {currentYear} Zygur Technologies Corp. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <Link href="/privacy" className="text-zinc-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-zinc-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <PasswordLink 
              href="/internal" 
              password="Dagger12"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              Internal
            </PasswordLink>
          </div>
        </div>
      </div>
    </footer>
  )
}
