'use client'

import { PublicPageWrapper } from '@/components/PageWrapper/PublicPageWrapper'
import { useUserStore } from '@/store/useUserStore'

export default function Home() {
  const user = useUserStore((state) => state.user)

  return (
    <PublicPageWrapper>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">{user && user.email}</main>
    </PublicPageWrapper>
  )
}
