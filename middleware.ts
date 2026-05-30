import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isItDomain, IT_URL } from "@/lib/domains";

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") ?? "";
  const { pathname } = request.nextUrl;

  if (isItDomain(hostname)) {
    if (pathname === "/") {
      return NextResponse.rewrite(new URL("/it", request.url));
    }
    if (!pathname.startsWith("/it")) {
      return NextResponse.rewrite(new URL(`/it${pathname}`, request.url));
    }
    return NextResponse.next();
  }

  if (pathname.startsWith("/it")) {
    const target = pathname.replace(/^\/it\/?/, "/") || "/";
    return NextResponse.redirect(new URL(target, IT_URL));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
