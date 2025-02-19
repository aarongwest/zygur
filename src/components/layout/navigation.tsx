import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function Navigation() {
  return (
    <nav className="border-b border-zinc-800">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center h-8">
          <img
            src="/logo.png"
            alt="Zygur Logo"
            className="h-full w-auto"
          />
        </Link>
        <div className="flex items-center space-x-8">
          <Link href="/services" className="text-zinc-400 hover:text-zinc-100">
            Services
          </Link>
          <Link href="/resources" className="text-zinc-400 hover:text-zinc-100">
            Resources
          </Link>
          <Link href="/company" className="text-zinc-400 hover:text-zinc-100">
            Company
          </Link>
          <Link href="/login" className="text-zinc-400 hover:text-zinc-100">
            Log in
          </Link>
            <Link href="/call">
              <Button variant="default" size="sm" className="bg-zinc-100 text-zinc-900 hover:bg-zinc-200">
                Schedule a call
              </Button>
            </Link>
        </div>
      </div>
    </nav>
  )
}
