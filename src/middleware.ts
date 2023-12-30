import { withAuth } from "next-auth/middleware"
import { useUserStore } from '@/store/useUserStore'

export default withAuth(
  function middleware (req) {
  },
  {
    callbacks: {
      authorized: ({ req, token}: any) => {
        if ( !token?.access_token ) {
          return false
        } else {
          return true
        }
      }
    }
  }
)

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|login|register).*)',
  ],
}
