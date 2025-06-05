import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Admin sayfalarını koruma
  if (pathname.startsWith('/admin') && pathname !== '/admin') {
    const token = request.cookies.get('token');

    if (!token) {
      return NextResponse.redirect(new URL('/admin', request.url));
    }

    try {
      await jwtVerify(
        token.value,
        new TextEncoder().encode(JWT_SECRET)
      );
      return NextResponse.next();
    } catch (error) {
      return NextResponse.redirect(new URL('/admin', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/admin/:path*',
}; 