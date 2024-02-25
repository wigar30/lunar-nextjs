'use client'

import { Params } from '@/types/app/router'
import { Text } from '@/components/Base/Text'
import { Sidebar } from '@/components/Base/Sidebar/Sidebar'
import { DetailTenantResponse } from '@/types/app/tenant'
import { useEffect, useState } from 'react'
import { useApiTenant } from '@/hooks/api/tenant/useApiTenant'
import { useParams } from 'next/navigation'
import { Card } from '@/components/Base/Card/Card'
import { Icon } from '@/components/Base/Icon'

export default function Page({ params }: { params: Params }) {
  const [tenant, setTenant] = useState<DetailTenantResponse>()
  const [isLoaded, setIsLoaded] = useState(false)
  const [activeTab, setActiveTab] = useState('product')

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
        {activeTab === 'product' && (
          <>
            <div className="w-full grid grid-cols-3 gap-4">
              <Card>
                <Card.Header>
                  <Text className="dark:text-primary-200 text-xl font-semibold">Total Products</Text>
                  <Icon icon="inventory_2" className="text-primary-200 text-2xl font-semibold"></Icon>
                </Card.Header>

                <Text className="dark:text-primary-200 text-5xl font-semibold">{tenant?.total_product}</Text>
              </Card>
              <Card>
                <Card.Header>
                  <Text className="dark:text-primary-200 text-xl font-semibold">Total Out of Stocks</Text>
                  <Icon icon="emergency_home" className="text-primary-200 text-2xl font-semibold"></Icon>
                </Card.Header>

                <Text className="dark:text-primary-200 text-5xl font-semibold">{tenant?.summaryStat.order_being_sent}</Text>
              </Card>
              <Card>
                <Card.Header>
                  <Text className="dark:text-primary-200 text-xl font-semibold">Total Product Archived</Text>
                  <Icon icon="emergency_home" className="text-primary-200 text-2xl font-semibold"></Icon>
                </Card.Header>

                <Text className="dark:text-primary-200 text-5xl font-semibold">{tenant?.summaryStat.order_being_sent}</Text>
              </Card>
            </div>

            <Card className="mt-4">
              <Text className="dark:text-primary-200 text-xl font-semibold">This goes Filtering</Text>
            </Card>

            <Card className="mt-4">
              <Text className="dark:text-primary-200 text-xl font-semibold">This goes Table</Text>
            </Card>
          </>
        )}
        {activeTab === 'order' && (
          <>
            <div className="w-full grid grid-cols-3 gap-4">
              <Card>
                <Card.Header>
                  <Text className="dark:text-primary-200 text-xl font-semibold">Unprocessed Order</Text>
                  <Icon icon="emergency_home" className="text-primary-200 text-2xl font-semibold"></Icon>
                </Card.Header>

                <Text className="dark:text-primary-200 text-5xl font-semibold">{tenant?.summaryStat.unprocessed_order}</Text>
              </Card>
              <Card>
                <Card.Header>
                  <Text className="dark:text-primary-200 text-xl font-semibold">Order On the Way</Text>
                  <Icon icon="emergency_home" className="text-primary-200 text-2xl font-semibold"></Icon>
                </Card.Header>

                <Text className="dark:text-primary-200 text-5xl font-semibold">{tenant?.summaryStat.order_being_sent}</Text>
              </Card>
              <Card>
                <Card.Header>
                  <Text className="dark:text-primary-200 text-xl font-semibold">Completed Order</Text>
                  <Icon icon="emergency_home" className="text-primary-200 text-2xl font-semibold"></Icon>
                </Card.Header>

                <Text className="dark:text-primary-200 text-5xl font-semibold">{tenant?.summaryStat.completed_order}</Text>
              </Card>
            </div>

            <div className="w-full grid grid-cols-2 gap-4 mt-4">
              <Card>
                <Card.Header>
                  <Text className="dark:text-primary-200 text-xl font-semibold">Total Complain</Text>
                  <Icon icon="emergency_home" className="text-primary-200 text-2xl font-semibold"></Icon>
                </Card.Header>

                <Text className="dark:text-primary-200 text-5xl font-semibold">{tenant?.summaryStat.total_complain}</Text>
              </Card>
              <Card>
                <Card.Header>
                  <Text className="dark:text-primary-200 text-xl font-semibold">Total Unfinished Complain</Text>
                  <Icon icon="emergency_home" className="text-primary-200 text-2xl font-semibold"></Icon>
                </Card.Header>

                <Text className="dark:text-primary-200 text-5xl font-semibold">{tenant?.summaryStat.unfinished_complain}</Text>
              </Card>
            </div>

            <Card className="mt-4">
              <Text className="dark:text-primary-200 text-xl font-semibold">This goes Filtering</Text>
            </Card>

            <Card className="mt-4">
              <Text className="dark:text-primary-200 text-xl font-semibold">This goes Table</Text>
            </Card>
          </>
        )}
      </div>
    </div>
  )
}
