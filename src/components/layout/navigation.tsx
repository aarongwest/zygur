'use client';

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import logoImage from "../../../public/ehs-logo3.png"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <nav className="border-b border-zinc-800">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center h-12">
          <Image
            src={logoImage}
            alt="EHS Logo"
            width={48}
            height={48}
            priority
            className="h-12 w-12"
          />
        </Link>
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/ehs" className="text-zinc-400 hover:text-zinc-100">
            Solutions
          </Link>
          <Link href="/company" className="text-zinc-400 hover:text-zinc-100">
            Company
          </Link>
          <Link 
            href="https://pro.ehs.inc/login" 
            className="text-zinc-400 hover:text-zinc-100"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sign In
          </Link>
          <Link href="/call">
            <Button variant="default" size="sm" className="bg-zinc-100 text-zinc-900 hover:bg-zinc-200">
              Schedule a call
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-zinc-400 hover:text-zinc-100"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`fixed inset-y-0 right-0 transform ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } w-64 bg-zinc-900 p-6 transition-transform duration-200 ease-in-out md:hidden z-50`}
      >
        <div className="flex flex-col space-y-6">
          <Link
            href="/ehs"
            className="text-zinc-400 hover:text-zinc-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Solutions
          </Link>
          <Link
            href="/company"
            className="text-zinc-400 hover:text-zinc-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Company
          </Link>
          <Link
            href="https://pro.ehs.inc/login"
            className="text-zinc-400 hover:text-zinc-100"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Sign In
          </Link>
          <Link
            href="/call"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Button variant="default" size="sm" className="w-full bg-zinc-100 text-zinc-900 hover:bg-zinc-200">
              Schedule a call
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  )
}
