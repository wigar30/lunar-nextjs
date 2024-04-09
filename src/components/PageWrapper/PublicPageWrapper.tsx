'use client'

import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { getCookie, hasCookie, deleteCookie } from 'cookies-next'
import { useUserStore } from '@/store/useUserStore'

import { User } from '@/types/utils/store/user'
import { Response as ResponseType } from '@/types/utils/ofetch/response'
import { useFetch } from '@/hooks/api/useFetch'
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

export const PublicPageWrapper = ({ children }: { children: React.ReactNode }) => {
  const [isToken, setIsToken] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  const pathname = usePathname()

  const store = useUserStore((state) => state)

  useEffect(() => {
    const token = hasCookie('next.auth.access_token')
    if (token) setIsToken(true)
  }, [])

  useEffect(() => {
    if (!store.user && isToken) {
      const token = getCookie('next.auth.access_token')
      getUser(token as string)
        .then((res) => {
          store.updateUser(res.data)
          setIsLoaded(true)
        })
        .catch(() => {
          deleteCookie('next.auth.access_token')
        })
    } else {
      setIsLoaded(true)
    }
  }, [store.user, isToken, isLoaded])

  return (
    <>
      {isLoaded && (
        <motion.main key={pathname} className="w-full" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}>
          {children}
        </motion.main>
      )}
    </>
  )
}
