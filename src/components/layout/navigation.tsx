"use client"

import { Button } from "@/components/ui/button"
import { Calendar, ChevronDown, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import logoImage from "../../../public/logo.png"

export function Navigation() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on larger screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleClickOutside = () => {
    setServicesOpen(false);
    setIndustriesOpen(false);
    setResourcesOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    // Close all dropdowns when toggling mobile menu
    setServicesOpen(false);
    setIndustriesOpen(false);
    setResourcesOpen(false);
  };

  return (
    <nav className="border-b border-zinc-800 relative bg-transparent">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center h-8">
          <Image
            src={logoImage}
            alt="Zygur Logo"
            width={96}
            height={32}
            priority
            className="h-full w-auto"
          />
        </Link>
        
        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button 
            onClick={toggleMobileMenu}
            className="text-zinc-400 hover:text-accent-orange focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/solutions/design-prototyping" className="text-zinc-400 hover:text-accent-orange">
            Design
          </Link>
          
          <Link href="/solutions/manufacturing-development" className="text-zinc-400 hover:text-accent-orange">
            Develop
          </Link>
          
          <Link href="/solutions/distribute-optimize" className="text-zinc-400 hover:text-accent-orange">
            Deploy
          </Link>

          <Link href="/call">
            <Button variant="default" size="sm" className="bg-accent-orange text-black hover:bg-accent-orange/80 flex items-center">
              <Calendar className="w-4 h-4 mr-1" /> Schedule a Call
            </Button>
          </Link>
        </div>
      </div>
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-zinc-900 border-b border-zinc-800 z-50">
          <div className="p-4 space-y-4">
            <Link href="/solutions/design-prototyping" className="block py-2 text-zinc-400 hover:text-accent-orange">
              Design
            </Link>
            
            <Link href="/solutions/manufacturing-development" className="block py-2 text-zinc-400 hover:text-accent-orange">
              Develop
            </Link>
            
            <Link href="/solutions/distribute-optimize" className="block py-2 text-zinc-400 hover:text-accent-orange">
              Deploy
            </Link>

            {/* Mobile Call Button */}
            <div className="pt-2">
              <Link href="/call">
                <Button variant="default" className="w-full bg-accent-orange text-black hover:bg-accent-orange/80 flex items-center justify-center">
                  <Calendar className="w-4 h-4 mr-1" /> Schedule a Call
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Backdrop to close dropdowns when clicking outside */}
      {(servicesOpen || industriesOpen || resourcesOpen) && !mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={handleClickOutside}
        ></div>
      )}
    </nav>
  )
}
