import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getSession } from './lib/auth';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Only protect /admin routes, but allow access to /admin/login
  if (pathname.startsWith('/admin') && pathname !== '/admin/login') {
    const session = await getSession();

    if (!session) {
      // Redirect to login if not authenticated
      const loginUrl = new URL('/admin/login', request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  // If authenticated and trying to access /admin/login, redirect to dashboard
  if (pathname === '/admin/login') {
    const session = await getSession();
    if (session) {
      return NextResponse.redirect(new URL('/admin/dashboard', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
