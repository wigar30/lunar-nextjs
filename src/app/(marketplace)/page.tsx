'use client'
import Image from 'next/image'

import { SecurePageWrapper } from '@/components/PageWrapper/SecurePageWrapper'
import { useUserStore } from '@/store/useUserStore'

export default function Home() {
  const user = useUserStore((state) => state.user)

  return (
    <SecurePageWrapper>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">{user && user.email}</main>
    </SecurePageWrapper>
  )
}
