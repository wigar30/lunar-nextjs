'use client'

import { Card } from '@/components/Base/Card/Card'
import { Icon } from '@/components/Base/Icon'
import { Input } from '@/components/Base/Input'
import { Text } from '@/components/Base/Text'
import { Orders as OrdersType } from '@/types/store/my-store/id/orders'
import { ChangeEvent, useState } from 'react'

export const Orders = (props: OrdersType) => {
  const [search, setSearch] = useState('')

  const handleSearchOrder = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }
  return (
    <>
      <div className="w-full grid grid-cols-3 gap-4">
        <Card>
          <Card.Header>
            <Text className="dark:text-primary-200 text-xl font-semibold">Unprocessed Order</Text>
            <Icon icon="circle" className="text-primary-200 text-2xl font-semibold"></Icon>
          </Card.Header>

          <Text className="dark:text-primary-200 text-5xl font-semibold">{props.tenant?.summaryStat.unprocessed_order}</Text>
        </Card>
        <Card>
          <Card.Header>
            <Text className="dark:text-primary-200 text-xl font-semibold">Order On the Way</Text>
            <Icon icon="local_shipping" className="text-primary-200 text-2xl font-semibold"></Icon>
          </Card.Header>

          <Text className="dark:text-primary-200 text-5xl font-semibold">{props.tenant?.summaryStat.order_being_sent}</Text>
        </Card>
        <Card>
          <Card.Header>
            <Text className="dark:text-primary-200 text-xl font-semibold">Completed Order</Text>
            <Icon icon="check_circle" className="text-primary-200 text-2xl font-semibold"></Icon>
          </Card.Header>

          <Text className="dark:text-primary-200 text-5xl font-semibold">{props.tenant?.summaryStat.completed_order}</Text>
        </Card>
      </div>

      <div className="w-full grid grid-cols-2 gap-4 mt-4">
        <Card>
          <Card.Header>
            <Text className="dark:text-primary-200 text-xl font-semibold">Total Complain</Text>
            <Icon icon="mark_chat_read" className="text-primary-200 text-2xl font-semibold"></Icon>
          </Card.Header>

          <Text className="dark:text-primary-200 text-5xl font-semibold">{props.tenant?.summaryStat.total_complain}</Text>
        </Card>
        <Card>
          <Card.Header>
            <Text className="dark:text-primary-200 text-xl font-semibold">Total Unfinished Complain</Text>
            <Icon icon="feedback" className="text-primary-200 text-2xl font-semibold"></Icon>
          </Card.Header>

          <Text className="dark:text-primary-200 text-5xl font-semibold">{props.tenant?.summaryStat.unfinished_complain}</Text>
        </Card>
      </div>

      <Card className="mt-4">
        <div className="w-full flex justify-end">
          <div className="relative">
            <Icon icon="search" className="absolute top-1/2 -translate-y-1/2 text-primary-200 text-xl pl-1" />
            <Input className="w-[300px] bg-primary-100 bg-opacity-20 h-[28px] text-sm text-primary-100 pl-7 pr-2" placeholder="Search Order" onInput={(e) => handleSearchOrder(e)} />
          </div>
        </div>
      </Card>

      <Card className="mt-4">
        <Text className="dark:text-primary-200 text-xl font-semibold">This goes Table</Text>
      </Card>
    </>
  )
}
