'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'

export const GuestPageWrapper = ({ children }: { children: React.ReactNode }) => {
  // const router = useRouter()
  // const { status } = useSession()

  // useEffect(() => {
  //   if (status === "authenticated") {
  //     router.push('/')
  //   }
  // }, [status])

  return <>{children}</>
}
