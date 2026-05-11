import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const country = request.geo?.country;

  if (country === "IN") {
    return new NextResponse(null, { status: 451 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/((?!_next/static|_next/image|favicon.ico).*)",
};
