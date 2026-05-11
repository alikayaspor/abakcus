import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const country = request.headers.get("x-vercel-ip-country");

  if (country === "IN") {
    return new NextResponse(null, { status: 451 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/((?!_next/static|_next/image|favicon.ico).*)",
};
