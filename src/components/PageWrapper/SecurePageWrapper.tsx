'use client'

import { useEffect, useLayoutEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { getCookie, hasCookie } from 'cookies-next'

import { useAuth } from '@/hooks/useAuth'

import { useUserStore } from '@/store/useUserStore'

import { User } from '@/types/utils/store/user'
import { Response as ResponseType } from '@/types/utils/ofetch/response'
import { ofetch } from 'ofetch'

const getUser = async (token: string): Promise<ResponseType<User>> => {
  const user = await ofetch<ResponseType<User>>('/v1/user/profile', {
    baseURL: process.env.NEXT_PUBLIC_API,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  })
  if (user.status === 'OK') {
    return Promise.resolve(user)
  } else return Promise.reject('error')
}

export const SecurePageWrapper = ({ children }: { children: React.ReactNode }) => {
  const [isToken, setIsToken] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  const { signOut } = useAuth()

  const store = useUserStore((state) => state)
  const pathname = usePathname()

  useLayoutEffect(() => {
    const token = hasCookie('next.auth.access_token')
    setIsToken(token)
  }, [])

  useEffect(() => {
    if (!store.user) {
      const token = getCookie('next.auth.access_token')
      getUser(token as string)
        .then((res) => {
          store.updateUser(res.data)
          setIsLoaded(true)
        })
        .catch((res) => {
          signOut()
        })
    }
  }, [store.user, isLoaded])

  return (
    <>
      {isToken && isLoaded && (
        <motion.main key={pathname} className="w-full" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}>
          {children}
        </motion.main>
      )}
    </>
  )
}
