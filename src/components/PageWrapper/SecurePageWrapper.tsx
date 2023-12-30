'use client'

import { useUserStore } from '@/store/useUserStore'
import { motion } from 'framer-motion'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { Response as ResponseType } from '@/types/app/ofetch/response'
import { User } from '@/types/store/user'
import { hasCookie } from 'cookies-next'

const getUser = async (): Promise<ResponseType<User>> => {
  const user = await fetch('/api/auth/user')
  if (user.ok) {
    const resp = user.json()
    return Promise.resolve(resp)
  } else return Promise.reject('error')
}

export const SecurePageWrapper = ({ children }: { children: React.ReactNode }) => {
  const { signOut } = useAuth()
  const [isToken, setIsToken] = useState(false)

  const store = useUserStore((state) => state)
  const pathname = usePathname()

  useEffect(() => {
    const token = hasCookie('next.auth.access_token')
    setIsToken(true)
    if (!token) {
      signOut()
    }
  }, [])

  useEffect(() => {
    if (!store.user) {
      getUser()
        .then((res) => {
          store.updateUser(res.data)
        })
        .catch((res) => {
          signOut()
        })
    }
  }, [store.user])

  return (
    <>
      {isToken && (
        <motion.div key={pathname} className="w-full h-full min-h-screen" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}>
          {children}
        </motion.div>
      )}
    </>
  )
}
