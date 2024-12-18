import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req : any) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  const { pathname } = req.nextUrl;

  // Allow the request if it's for public routes or the token exists
  if (pathname.startsWith('/api/auth/signin') || token) {
    return NextResponse.next();
  }

  // Redirect to sign-in page if not authenticated
  if (!token && pathname !== '/api/auth/signin') {
    return NextResponse.redirect(new URL('/api/auth/signin', req.url));
  }
}

export const config = {
  matcher: ['/((?!api/public|_next|static|favicon.ico).*)'],
};
