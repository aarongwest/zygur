'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookieAccepted = localStorage.getItem('cookieAccepted')
    if (!cookieAccepted) {
      setIsVisible(true)
    }
    
    // Temporary: Show banner if URL has ?showcookies=true
    const urlParams = new URLSearchParams(window.location.search)
    if (urlParams.get('showcookies') === 'true') {
      setIsVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookieAccepted', 'true')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 left-4 z-50 max-w-xs">
      <div className="relative w-full">
        {/* ASCII-style corner decorations */}
        <div className="absolute -top-1 -left-1 text-white font-mono text-sm">┌</div>
        <div className="absolute -top-1 -right-1 text-white font-mono text-sm">┐</div>
        <div className="absolute -bottom-1 -left-1 text-white font-mono text-sm">└</div>
        <div className="absolute -bottom-1 -right-1 text-white font-mono text-sm">┘</div>
        
        {/* Plus signs in corners */}
        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 text-white font-mono text-sm">+</div>
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-white font-mono text-sm">+</div>
        <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 text-white font-mono text-sm">+</div>
        <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 text-white font-mono text-sm">+</div>
        
        {/* Main content box */}
        <div className="border-2 border-dashed border-white p-4" style={{backgroundColor: '#4165ff'}}>
          <h2 className="text-white font-mono text-sm mb-3 tracking-wider">
            COOKIE SETTINGS
          </h2>
          
          <p className="text-zinc-200 font-mono text-xs leading-relaxed mb-4">
            We use cookies on this website to optimize your experience, and the service we provide. Read more about the cookies we use on our{' '}
            <Link 
              href="/privacy" 
              className="text-accent-orange hover:text-accent-orange/80 underline"
            >
              PRIVACY POLICY ↗
            </Link>
          </p>
          
          <button
            onClick={acceptCookies}
            className="bg-transparent border-2 border-dashed border-white text-white font-mono text-xs px-3 py-2 hover:bg-white hover:text-black transition-colors duration-200 tracking-wider"
          >
            ACCEPT & CONTINUE
          </button>
        </div>
      </div>
    </div>
  )
}
