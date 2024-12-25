import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const pathname = req.nextUrl.pathname;

  const protectedRoutes = [
    "/blogs",
    "/admin/dashboard",
    "/profile",
    "/bookmarks",
    "/create",
  ];

  // Redirect signed-in users away from the sign-in page
  if (session && pathname === "/api/auth/signin") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // Check if the path is a protected route
  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  if (!session && isProtectedRoute) {
    return NextResponse.redirect(new URL("/api/auth/signin", req.url));
  }

  // add the CORS headers to the response
  const res = NextResponse.next();
  res.headers.append("Access-Control-Allow-Credentials", "true");
  res.headers.append("Access-Control-Allow-Origin", "*"); // replace this your actual origin
  res.headers.append(
    "Access-Control-Allow-Methods",
    "GET,DELETE,PATCH,POST,PUT"
  );
  res.headers.append(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  // Proceed for all other requests
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/api/:path*",
    "/blogs/:path*",
    "/admin/dashboard/:path*",
    "/profile/:path*",
    "/bookmarks",
    "/create",
    "/api/auth/signin",
  ],
};
