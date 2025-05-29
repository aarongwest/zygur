"use client"

import { Button } from "@/components/ui/button"
import { Calendar, ChevronDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import logoImage from "../../../public/logo.png"

export function Navigation() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  const handleClickOutside = () => {
    setServicesOpen(false);
    setIndustriesOpen(false);
    setResourcesOpen(false);
  };

  return (
    <nav className="border-b border-zinc-800 relative">
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
        <div className="flex items-center space-x-6">
          {/* Services Dropdown */}
          <div className="relative">
            <button 
              className="flex items-center text-zinc-400 hover:text-zinc-100"
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
              <div className="absolute left-0 mt-2 w-60 bg-zinc-900 border border-zinc-700 rounded-md shadow-lg z-50">
                <div className="py-2">
                  <Link href="/services/strategy" className="block px-4 py-2 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100">
                    Strategy
                  </Link>
                  <Link href="/services/execution" className="block px-4 py-2 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100">
                    Execution
                  </Link>
                  <Link href="/services/optimization" className="block px-4 py-2 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100">
                    Optimization
                  </Link>
                  <Link href="/services/ai-enhanced-marketing" className="block px-4 py-2 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100">
                    AI-Enhanced Marketing
                  </Link>
                  <Link href="/services/b2b-marketing" className="block px-4 py-2 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100">
                    B2B Services
                  </Link>
                  <Link href="/pricing/fractional-cmo-cost" className="block px-4 py-2 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100">
                    Fractional CMO Cost
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Industries Dropdown */}
          <div className="relative">
            <button 
              className="flex items-center text-zinc-400 hover:text-zinc-100"
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
              <div className="absolute left-0 mt-2 w-60 bg-zinc-900 border border-zinc-700 rounded-md shadow-lg z-50">
                <div className="py-2">
                  <Link href="/industries/hvac-mechanical-plumbing-fractional-cmo" className="block px-4 py-2 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100">
                    HVAC/Mechanical/Plumbing
                  </Link>
                  <Link href="/industries/construction-fractional-cmo" className="block px-4 py-2 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100">
                    Construction
                  </Link>
                  <Link href="/industries/manufacturing-fractional-cmo" className="block px-4 py-2 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100">
                    Manufacturing
                  </Link>
                  <Link href="/industries/professional-services-fractional-cmo" className="block px-4 py-2 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100">
                    Professional Services
                  </Link>
                  <Link href="/industries/ecommerce-fractional-cmo" className="block px-4 py-2 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100">
                    E-commerce
                  </Link>
                  <Link href="/industries/fractional-cmo-for-startups" className="block px-4 py-2 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100">
                    Startups
                  </Link>
                  <Link href="/industries/b2b-fractional-cmo" className="block px-4 py-2 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100">
                    B2B Companies
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link href="/approach" className="text-zinc-400 hover:text-zinc-100">
            Approach
          </Link>
          
          <Link href="/results" className="text-zinc-400 hover:text-zinc-100">
            Results
          </Link>
          
          <Link href="/labs" className="text-zinc-400 hover:text-zinc-100">
            Labs
          </Link>

          {/* Resources Dropdown */}
          <div className="relative">
            <button 
              className="flex items-center text-zinc-400 hover:text-zinc-100"
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
              <div className="absolute right-0 mt-2 w-60 bg-zinc-900 border border-zinc-700 rounded-md shadow-lg z-50">
                <div className="py-2">
                  <Link href="/resources/what-is-a-fractional-cmo" className="block px-4 py-2 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100">
                    What is a Fractional CMO?
                  </Link>
                  <Link href="/compare/fractional-cmo-vs-agency" className="block px-4 py-2 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100">
                    Fractional CMO vs Agency
                  </Link>
                  <Link href="/compare/fractional-cmo-vs-full-time" className="block px-4 py-2 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100">
                    Fractional CMO vs Full-Time
                  </Link>
                  <Link href="/results/case-studies" className="block px-4 py-2 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100">
                    Case Studies
                  </Link>
                  <Link href="/resources" className="block px-4 py-2 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100">
                    All Resources
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link href="/call">
            <Button variant="default" size="sm" className="bg-[#06FF00] text-zinc-900 hover:bg-[#00e600] flex items-center">
              <Calendar className="w-4 h-4 mr-1" /> Schedule a Call
            </Button>
          </Link>
        </div>
      </div>
      {/* Backdrop to close dropdowns when clicking outside */}
      {(servicesOpen || industriesOpen || resourcesOpen) && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={handleClickOutside}
        ></div>
      )}
    </nav>
  )
}
