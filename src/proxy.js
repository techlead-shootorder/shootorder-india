// src/proxy.js (migrated from middleware.js for Next.js 16+)
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export function proxy(request) {
  // Get the pathname of the request
  const path = request.nextUrl.pathname;

  // Define paths that should be protected (all admin routes)
  const isAdminPath = path.startsWith('/admin');
  
  // Check if the user is authenticated by looking for an auth token in cookies
  const authToken = request.cookies.get('auth_token')?.value;
  
  // If it's an admin path and there's no auth token, redirect to login
  if (isAdminPath && !authToken) {
    // Create a redirect URL to the login page with the original URL as the "from" param
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('from', path);
    
    return NextResponse.redirect(loginUrl);
  }
  
  // Continue with the request if authenticated or not an admin path
  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/login'],
};
