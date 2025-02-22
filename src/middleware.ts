import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Protect download page from direct access
  if (request.nextUrl.pathname === '/download') {
    const referrer = request.headers.get('referer')
    
    // Only allow access if coming from an article page
    if (!referrer || !referrer.includes('/ehs/')) {
      return NextResponse.redirect(new URL('/', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/download']
}
