import { NextRequest, NextResponse } from 'next/server'

export default function middleware(request: NextRequest) {
  const isToken = request.cookies.has('next.auth.access_token')
  if (request.nextUrl.pathname.startsWith('/my-store')) {
    if (!isToken) {
      return NextResponse.redirect(new URL(`/login?${new URLSearchParams({ next: request.nextUrl.pathname }).toString()}`, request.url))
    }
  }

  if (request.nextUrl.pathname.startsWith('/my-cart')) {
    if (!isToken) {
      return NextResponse.redirect(new URL(`/login?${new URLSearchParams({ next: request.nextUrl.pathname }).toString()}`, request.url))
    }
  }
}
