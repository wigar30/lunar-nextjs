'use client'

import { Params } from '@/types/utils/router'
import { Text } from '@/components/Base/Text'
import { Sidebar } from '@/components/Base/Sidebar/Sidebar'
import { useEffect, useState } from 'react'
import { useApiTenant } from '@/hooks/api/tenant/useApiTenant'
import { Backnav } from '@/components/Backnav'
import { Products } from './component/Products'
import { Orders } from './component/Orders'
import { DetailTenantResponse } from '@/types/api/tenant'

export default function Page({ params }: { params: Params }) {
  const [activeTab, setActiveTab] = useState('product')

  const [tenant, setTenant] = useState<DetailTenantResponse>()
  const [isLoaded, setIsLoaded] = useState(false)

  const tabs = [
    { key: 'product', label: 'Products' },
    { key: 'order', label: 'Order' },
    { key: 'store', label: 'Store' },
    { key: 'setting', label: 'Setting' }
  ]

  const { getDetailTenant } = useApiTenant()

  useEffect(() => {
    getDetailTenant(params).then((res) => {
      if (res) {
        setTenant(res)
        setIsLoaded(true)
      }
    })
  }, [])

  return (
    <>
      <Backnav to="/my-store" className="container mx-auto mt-6" />
      <div className="container mx-auto grid grid-cols-12 gap-6 mt-6">
        <div className="col-span-1">
          <Sidebar>
            {tabs.map((item, i) => (
              <Sidebar.Menu key={i} className={i === 0 ? 'active' : ''} onClick={(e) => setActiveTab(item.key)}>
                <Text className="dark:text-primary-600 text-sm">{item.label}</Text>
              </Sidebar.Menu>
            ))}
          </Sidebar>
        </div>

        <div className="col-span-11">
          {activeTab === 'product' && <Products params={params} tenant={tenant} />}
          {activeTab === 'order' && <Orders params={params} tenant={tenant} />}
        </div>
      </div>
    </>
  )
}
