'use client'

import { SecurePageWrapper } from '@/components/PageWrapper/SecurePageWrapper'
import { Hero } from './component/Hero'
import { Store } from './component/Store'

export default function Page() {
  return (
    <div className="container mx-auto mt-6">
      <Hero></Hero>

      <Store></Store>
    </div>
  )
}
