import { updateSession } from '@/utils/supabase/middleware'
import { NextRequest, NextResponse } from 'next/server'

export async function middleware(request: NextRequest) {
  // Get the hostname and pathname from the request
  const hostname = request.headers.get('host')
  const pathname = request.nextUrl.pathname

  // Exclude localhost:3000/ from the authentication check
  if (hostname === 'https://mchango-next.vercel.app' && pathname === '/') {
    return NextResponse.next() // Allow access without authentication
  }

  // If not the landing page, proceed with authentication or session update
  return await updateSession(request)
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - Any image files (svg, png, jpg, jpeg, gif, webp)
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
