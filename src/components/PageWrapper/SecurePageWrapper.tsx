'use client'

import { signOut, useSession } from 'next-auth/react'
import { useApiMe } from '@/hooks/api/auth/useApiMe'
import { useUserStore } from '@/store/useUserStore'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export const SecurePageWrapper = ({ children }: { children: React.ReactNode }) => {
  const [shouldFetch, setShouldFetch] = useState(false)

  const { profile, isLoading, isError } = useApiMe(shouldFetch)
  const pathname = usePathname()
  const store = useUserStore((state) => state)
  const { data: session, status } = useSession()
  
  useEffect(() => {
    if (status === "unauthenticated") {
      signOut()
    }
    if (!store.user && status === "authenticated" && !shouldFetch) {
      setShouldFetch(true)
    }
  }, [store.user, status, shouldFetch])

  useEffect(() => {
    console.log(234234)
    if (isError) {
      signOut()
    }
    if (!isLoading && profile) {
      store.updateUser(profile);
    }
  }, [isLoading, profile, isError]);

  return (
    <motion.div key={pathname} className="w-full h-full min-h-screen" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}>
      {children}
    </motion.div>
  )
}
