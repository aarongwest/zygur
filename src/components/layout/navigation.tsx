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
          {/* Services Dropdown */}
          <div className="relative">
            <button 
              className="flex items-center text-zinc-400 hover:text-accent-orange"
              onClick={(e) => {
                e.stopPropagation();
                setServicesOpen(!servicesOpen);
                setIndustriesOpen(false);
                setResourcesOpen(false);
              }}
            >
              Services <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>
            {servicesOpen && (
              <div className="absolute left-0 mt-2 w-60 bg-zinc-900 border border-accent-orange/20 rounded-md shadow-lg z-50">
                <div className="py-2">
                  <Link href="/services/strategy" className="block px-4 py-2 text-zinc-400 hover:bg-zinc-800 hover:text-accent-orange">
                    Strategy
                  </Link>
                  <Link href="/services/execution" className="block px-4 py-2 text-zinc-400 hover:bg-zinc-800 hover:text-accent-orange">
                    Execution
                  </Link>
                  <Link href="/services/optimization" className="block px-4 py-2 text-zinc-400 hover:bg-zinc-800 hover:text-accent-orange">
                    Optimization
                  </Link>
                  <Link href="/services/ai-enhanced-marketing" className="block px-4 py-2 text-zinc-400 hover:bg-zinc-800 hover:text-accent-orange">
                    AI-Enhanced Marketing
                  </Link>
                  <Link href="/services/b2b-marketing" className="block px-4 py-2 text-zinc-400 hover:bg-zinc-800 hover:text-accent-orange">
                    B2B Services
                  </Link>
                  <Link href="/pricing/fractional-cmo-cost" className="block px-4 py-2 text-zinc-400 hover:bg-zinc-800 hover:text-accent-orange">
                    Fractional CMO Cost
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Industries Dropdown */}
          <div className="relative">
            <button 
              className="flex items-center text-zinc-400 hover:text-accent-yellow"
              onClick={(e) => {
                e.stopPropagation();
                setIndustriesOpen(!industriesOpen);
                setServicesOpen(false);
                setResourcesOpen(false);
              }}
            >
              Industries <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${industriesOpen ? 'rotate-180' : ''}`} />
            </button>
            {industriesOpen && (
              <div className="absolute left-0 mt-2 w-60 bg-zinc-900 border border-accent-yellow/20 rounded-md shadow-lg z-50">
                <div className="py-2">
                  <Link href="/industries/hvac-mechanical-plumbing-fractional-cmo" className="block px-4 py-2 text-zinc-400 hover:bg-zinc-800 hover:text-accent-yellow">
                    HVAC/Mechanical/Plumbing
                  </Link>
                  <Link href="/industries/construction-fractional-cmo" className="block px-4 py-2 text-zinc-400 hover:bg-zinc-800 hover:text-accent-yellow">
                    Construction
                  </Link>
                  <Link href="/industries/manufacturing-fractional-cmo" className="block px-4 py-2 text-zinc-400 hover:bg-zinc-800 hover:text-accent-yellow">
                    Manufacturing
                  </Link>
                  <Link href="/industries/professional-services-fractional-cmo" className="block px-4 py-2 text-zinc-400 hover:bg-zinc-800 hover:text-accent-yellow">
                    Professional Services
                  </Link>
                  <Link href="/industries/ecommerce-fractional-cmo" className="block px-4 py-2 text-zinc-400 hover:bg-zinc-800 hover:text-accent-yellow">
                    E-commerce
                  </Link>
                  <Link href="/industries/fractional-cmo-for-startups" className="block px-4 py-2 text-zinc-400 hover:bg-zinc-800 hover:text-accent-yellow">
                    Startups
                  </Link>
                  <Link href="/industries/b2b-fractional-cmo" className="block px-4 py-2 text-zinc-400 hover:bg-zinc-800 hover:text-accent-yellow">
                    B2B Companies
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link href="/approach" className="text-zinc-400 hover:text-accent-orange">
            Approach
          </Link>
          
          <Link href="/results" className="text-zinc-400 hover:text-accent-yellow">
            Results
          </Link>
          
          <Link href="/labs" className="text-zinc-400 hover:text-accent-orange">
            Labs
          </Link>

          {/* Resources Dropdown */}
          <div className="relative">
            <button 
              className="flex items-center text-zinc-400 hover:text-accent-yellow"
              onClick={(e) => {
                e.stopPropagation();
                setResourcesOpen(!resourcesOpen);
                setServicesOpen(false);
                setIndustriesOpen(false);
              }}
            >
              Resources <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${resourcesOpen ? 'rotate-180' : ''}`} />
            </button>
            {resourcesOpen && (
              <div className="absolute right-0 mt-2 w-60 bg-zinc-900 border border-accent-yellow/20 rounded-md shadow-lg z-50">
                <div className="py-2">
                  <Link href="/resources/what-is-a-fractional-cmo" className="block px-4 py-2 text-zinc-400 hover:bg-zinc-800 hover:text-accent-yellow">
                    What is a Fractional CMO?
                  </Link>
                  <Link href="/compare/fractional-cmo-vs-agency" className="block px-4 py-2 text-zinc-400 hover:bg-zinc-800 hover:text-accent-yellow">
                    Fractional CMO vs Agency
                  </Link>
                  <Link href="/compare/fractional-cmo-vs-full-time" className="block px-4 py-2 text-zinc-400 hover:bg-zinc-800 hover:text-accent-yellow">
                    Fractional CMO vs Full-Time
                  </Link>
                  <Link href="/results/case-studies" className="block px-4 py-2 text-zinc-400 hover:bg-zinc-800 hover:text-accent-yellow">
                    Case Studies
                  </Link>
                  <Link href="/resources" className="block px-4 py-2 text-zinc-400 hover:bg-zinc-800 hover:text-accent-yellow">
                    All Resources
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link href="/call">
            <Button variant="default" size="sm" className="bg-accent-orange text-white hover:bg-accent-orange/80 flex items-center">
              <Calendar className="w-4 h-4 mr-1" /> Schedule a Call
            </Button>
          </Link>
        </div>
      </div>
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-zinc-900 border-b border-zinc-800 z-50">
          <div className="p-4 space-y-4">
            {/* Mobile Services Dropdown */}
            <div>
              <button 
                className="flex items-center w-full text-zinc-400 hover:text-accent-orange justify-between"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                Services <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  <Link href="/services/strategy" className="block py-2 text-sm text-zinc-400 hover:text-accent-orange">
                    Strategy
                  </Link>
                  <Link href="/services/execution" className="block py-2 text-sm text-zinc-400 hover:text-accent-orange">
                    Execution
                  </Link>
                  <Link href="/services/optimization" className="block py-2 text-sm text-zinc-400 hover:text-accent-orange">
                    Optimization
                  </Link>
                  <Link href="/services/ai-enhanced-marketing" className="block py-2 text-sm text-zinc-400 hover:text-accent-orange">
                    AI-Enhanced Marketing
                  </Link>
                  <Link href="/services/b2b-marketing" className="block py-2 text-sm text-zinc-400 hover:text-accent-orange">
                    B2B Services
                  </Link>
                  <Link href="/pricing/fractional-cmo-cost" className="block py-2 text-sm text-zinc-400 hover:text-accent-orange">
                    Fractional CMO Cost
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Industries Dropdown */}
            <div>
              <button 
                className="flex items-center w-full text-zinc-400 hover:text-accent-yellow justify-between"
                onClick={() => setIndustriesOpen(!industriesOpen)}
              >
                Industries <ChevronDown className={`w-4 h-4 transition-transform ${industriesOpen ? 'rotate-180' : ''}`} />
              </button>
              {industriesOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  <Link href="/industries/hvac-mechanical-plumbing-fractional-cmo" className="block py-2 text-sm text-zinc-400 hover:text-accent-yellow">
                    HVAC/Mechanical/Plumbing
                  </Link>
                  <Link href="/industries/construction-fractional-cmo" className="block py-2 text-sm text-zinc-400 hover:text-accent-yellow">
                    Construction
                  </Link>
                  <Link href="/industries/manufacturing-fractional-cmo" className="block py-2 text-sm text-zinc-400 hover:text-accent-yellow">
                    Manufacturing
                  </Link>
                  <Link href="/industries/professional-services-fractional-cmo" className="block py-2 text-sm text-zinc-400 hover:text-accent-yellow">
                    Professional Services
                  </Link>
                  <Link href="/industries/ecommerce-fractional-cmo" className="block py-2 text-sm text-zinc-400 hover:text-accent-yellow">
                    E-commerce
                  </Link>
                  <Link href="/industries/fractional-cmo-for-startups" className="block py-2 text-sm text-zinc-400 hover:text-accent-yellow">
                    Startups
                  </Link>
                  <Link href="/industries/b2b-fractional-cmo" className="block py-2 text-sm text-zinc-400 hover:text-accent-yellow">
                    B2B Companies
                  </Link>
                </div>
              )}
            </div>

            {/* Basic Mobile Links */}
            <Link href="/approach" className="block text-zinc-400 hover:text-accent-orange py-2">
              Approach
            </Link>
            
            <Link href="/results" className="block text-zinc-400 hover:text-accent-yellow py-2">
              Results
            </Link>
            
            <Link href="/labs" className="block text-zinc-400 hover:text-accent-orange py-2">
              Labs
            </Link>

            {/* Mobile Resources Dropdown */}
            <div>
              <button 
                className="flex items-center w-full text-zinc-400 hover:text-accent-yellow justify-between"
                onClick={() => setResourcesOpen(!resourcesOpen)}
              >
                Resources <ChevronDown className={`w-4 h-4 transition-transform ${resourcesOpen ? 'rotate-180' : ''}`} />
              </button>
              {resourcesOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  <Link href="/resources/what-is-a-fractional-cmo" className="block py-2 text-sm text-zinc-400 hover:text-accent-yellow">
                    What is a Fractional CMO?
                  </Link>
                  <Link href="/compare/fractional-cmo-vs-agency" className="block py-2 text-sm text-zinc-400 hover:text-accent-yellow">
                    Fractional CMO vs Agency
                  </Link>
                  <Link href="/compare/fractional-cmo-vs-full-time" className="block py-2 text-sm text-zinc-400 hover:text-accent-yellow">
                    Fractional CMO vs Full-Time
                  </Link>
                  <Link href="/results/case-studies" className="block py-2 text-sm text-zinc-400 hover:text-accent-yellow">
                    Case Studies
                  </Link>
                  <Link href="/resources" className="block py-2 text-sm text-zinc-400 hover:text-accent-yellow">
                    All Resources
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Call Button */}
            <div className="pt-2">
              <Link href="/call">
                <Button variant="default" className="w-full bg-accent-orange text-white hover:bg-accent-orange/80 flex items-center justify-center">
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
