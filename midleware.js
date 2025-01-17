import { NextResponse } from 'next/server';
export function middleware(req) {
  const url = req.nextUrl;
  // Check if path matches and 'rsc' query parameter exists
  if (url.pathname === '/old/hi' && url.searchParams.has('rsc')) {
    const response = NextResponse.next();
    // Set 'Cache-Control' header to prevent caching
    response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    return response;
  }
  if (url.pathname === 'hi' && url.searchParams.has('rsc')) {
    const response = NextResponse.next();
    // Set 'Cache-Control' header to prevent caching
    response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    return response;
  }
  // Continue processing for other requests
  return NextResponse.next();
}