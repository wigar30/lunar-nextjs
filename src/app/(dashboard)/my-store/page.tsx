'use client'

import { SecurePageWrapper } from '@/components/PageWrapper/SecurePageWrapper'
import { Hero } from './component/Hero'
import { Store } from './component/Store'
import { useApiTenant } from '@/hooks/api/tenant/useApiTenant'
import { useState } from 'react'
import { ListTenantRequest } from '@/types/app/tenant'

export default function Page() {
  return (
    <SecurePageWrapper>
      <div className="container mx-auto mt-6">
        <Hero></Hero>

        <Store></Store>
      </div>
    </SecurePageWrapper>
  )
}
