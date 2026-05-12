import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const country = request.headers.get("x-vercel-ip-country");

  if (country === "IN") {
    return new NextResponse(null, { status: 451 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    {
      source: "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
        { type: "header", key: "rsc" },
      ],
    },
  ],
};
