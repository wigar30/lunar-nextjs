'use client'

import { Button } from '@/components/Base/Button'
import { Icon } from '@/components/Base/Icon'
import { Text } from '@/components/Base/Text'
import { useApiTenant } from '@/hooks/api/tenant/useApiTenant'
import { PaginationResponse } from '@/types/utils/ofetch/response'
import { ListTenantRequest, ListTenantResponse } from '@/types/app/tenant'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export const Store = () => {
  const [query, setQuery] = useState<ListTenantRequest>({
    page: '1',
    limit: '10'
  })
  const [meta, setMeta] = useState<PaginationResponse>()
  const [tenants, setTenants] = useState<ListTenantResponse>()
  const [isLoaded, setIsLoaded] = useState(false)

  const pathname = usePathname()
  const { getTenants } = useApiTenant()

  useEffect(() => {
    getTenants(query).then((res) => {
      if (res) {
        setTenants(res)
        setMeta({
          page: res.page,
          limit: res.limit,
          totalData: res.totalData,
          totalPage: res.totalPage,
          anyNextPage: res.anyNextPage,
          anyPrevPage: res.anyPrevPage
        })
        setIsLoaded(true)
      }
    })
  }, [])

  return (
    <section className="container mx-auto mt-6 grid grid-cols-3 gap-10">
      {isLoaded && tenants ? (
        tenants.items.map((item) => (
          <div key={item.id} className="w-full border-2 border-dashed border-primary-900 bg-primary-100 rounded-2xl h-96 p-1">
            <div className="w-full h-full border-4 border-primary-900 bg-primary-100 rounded-xl p-4 pb-8 flex flex-col justify-between">
              <header className="w-full">
                <Icon icon="storefront" tooltip="Store" className="text-primary-900 text-[40px]" />
                <Text className="text-2xl font-semibold">{item.name}</Text>
              </header>

              <div className="w-full space-y-4">
                <div className="w-4/5 mx-auto p-2 bg-primary-800 rounded-xl">
                  <div className="w-full flex items-center space-x-3">
                    <Icon icon="analytics" className="text-primary-50 text-[28px]" />
                    <Text className="dark:text-primary-100 text-sm">Summary Stat</Text>
                  </div>
                  <div className="w-full space-y-1 mt-2">
                    <div className="w-full flex justify-between items-center">
                      <Text className="dark:text-primary-100 text-sm">Unprocessed Order</Text>
                      <Text className="dark:text-primary-100 text-sm font-semibold">{item.summaryStat.unprocessed_order}</Text>
                    </div>

                    <div className="w-full flex justify-between items-center">
                      <Text className="dark:text-primary-100 text-sm">Order being delivered</Text>
                      <Text className="dark:text-primary-100 text-sm font-semibold">{item.summaryStat.order_being_sent}</Text>
                    </div>

                    <div className="w-full flex justify-between items-center">
                      <Text className="dark:text-primary-100 text-sm">Unprocessed Complaint</Text>
                      <Text className="dark:text-primary-100 text-sm font-semibold">{item.summaryStat.unfinished_complain}</Text>
                    </div>
                  </div>
                </div>

                <div className="w-full flex justify-center">
                  <Button to={`${pathname}/${item.id}`} size="lg" className="rounded-full">
                    <Text className=" text-sm dark:text-primary-100">Manage {item.levelTenant.level}</Text>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div></div>
      )}
    </section>
  )
}
