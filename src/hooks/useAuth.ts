'use client'

import { getCookie, hasCookie, deleteCookie } from 'cookies-next'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [accessToken, setAccessToken] = useState<string | null>('')
  const router = useRouter()

  useEffect(() => {
    const istoken = hasCookie('next.auth.access_token')
    const token = getCookie('next.auth.access_token')

    if (istoken) {
      setIsAuthenticated(true)
    }
    setAccessToken(token as string)
  }, [])

  const signOut = () => {
    deleteCookie('next.auth.access_token')
    router.push('/login')
  }

  return {
    accessToken,
    isAuthenticated,
    signOut
  }
}
