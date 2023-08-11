import { type NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { env } from "./env.mjs";

export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /_static (inside /public)
     * 4. all root files inside /public (e.g. /favicon.ico)
     */
    "/((?!api/|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)",
  ],
};

export default function middleware(req: NextRequest) {
  const url = req.nextUrl;
  // Get hostname of request (e.g. demo.vercel.pub, demo.localhost:3000)
  const hostname = req.headers
    .get("host")!
    .replace(".test.com:3000", `.${env.NEXT_PUBLIC_ROOT_DOMAIN}`);
  console.log(hostname);

  // Get the pathname of the request (e.g. /, /about, /blog/first-post)
  const path = url.pathname;

  // rewrites for app pages
  if (hostname == `dashboard.${env.NEXT_PUBLIC_ROOT_DOMAIN}`) {
    return NextResponse.rewrite(
      new URL(`/dashboard${path === "/" ? "" : path}`, req.url)
    );
  }

  // rewrite root application to `/home` folder
  if (
    hostname === "test.com:3000" ||
    hostname === env.NEXT_PUBLIC_ROOT_DOMAIN
  ) {
    return NextResponse.rewrite(new URL(`/home${path}`, req.url));
  }

  // rewrite everything else to `/[domain]/[path] dynamic route
  return NextResponse.rewrite(new URL(`/${hostname}${path}`, req.url));
}
