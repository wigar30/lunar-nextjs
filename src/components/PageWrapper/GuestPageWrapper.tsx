'use client'

import { hasCookie } from 'cookies-next'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export const GuestPageWrapper = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()

  useEffect(() => {
    const token = hasCookie('next.auth.access_token')
    if (token) {
      router.push('/')
    }
  }, [])

  return <main>{children}</main>
}
