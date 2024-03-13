'use client'

import { Button } from '@/components/Base/Button'
import { Card } from '@/components/Base/Card/Card'
import { Icon } from '@/components/Base/Icon'
import { Input } from '@/components/Base/Input'
import { Table } from '@/components/Base/Table/Table'
import { Text } from '@/components/Base/Text'
import { useApiProduct } from '@/hooks/api/product/useApiProduct'
import { PaginationResponse } from '@/types/app/ofetch/response'
import { ListProductRequest, ListProductResponse } from '@/types/app/product'
import { TableHeader } from '@/types/components/Table/table'
import { Products as ProductType } from '@/types/store/my-store/id/products'
import { ProductItem } from '@/types/store/my-store/product'
import { ChangeEvent, useEffect, useState } from 'react'

export const Products = (props: ProductType) => {
  const [product, setProduct] = useState<ListProductResponse>()
  const [search, setSearch] = useState('')

  const [productLoading, setProductLoading] = useState(false)
  const [productMeta, setProductMeta] = useState<PaginationResponse>()
  const [query, setQuery] = useState<ListProductRequest>({
    page: '1',
    limit: '10'
  })

  const productHeaders: TableHeader<ProductItem>[] = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Product Name' },
    { key: 'totalStock', label: 'Stock' },
    { key: 'totalSold', label: 'Total Sold' },
    { key: 'price', label: 'Price' }
  ]

  const { getProducts } = useApiProduct()

  const handleGetProduct = () => {
    setProductLoading(true)
    getProducts({ tenantId: props.params.id }, query)
      .then((res) => {
        if (res) {
          setProduct(res)
          setProductMeta({
            page: res.page,
            limit: res.limit,
            totalData: res.totalData,
            totalPage: res.totalPage,
            anyNextPage: res.anyNextPage,
            anyPrevPage: res.anyPrevPage
          })
        }
      })
      .finally(() => {
        setProductLoading(false)
      })
  }

  useEffect(() => {
    handleGetProduct()
  }, [])

  const handleSearchProduct = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }
  return (
    <>
      <div className="w-full grid grid-cols-3 gap-4">
        <Card>
          <Card.Header>
            <Text className="dark:text-primary-200 text-xl font-semibold">Total Products</Text>
            <Icon icon="inventory_2" className="text-primary-200 text-2xl font-semibold"></Icon>
          </Card.Header>

          <Text className="dark:text-primary-200 text-5xl font-semibold">{props.tenant?.total_product}</Text>
        </Card>
        <Card>
          <Card.Header>
            <Text className="dark:text-primary-200 text-xl font-semibold">Total Out of Stocks</Text>
            <Icon icon="emergency_home" className="text-primary-200 text-2xl font-semibold"></Icon>
          </Card.Header>

          <Text className="dark:text-primary-200 text-5xl font-semibold">{props.tenant?.summaryStat.order_being_sent}</Text>
        </Card>
        <Card>
          <Card.Header>
            <Text className="dark:text-primary-200 text-xl font-semibold">Total Product Archived</Text>
            <Icon icon="archive" className="text-primary-200 text-2xl font-semibold"></Icon>
          </Card.Header>

          <Text className="dark:text-primary-200 text-5xl font-semibold">{props.tenant?.summaryStat.order_being_sent}</Text>
        </Card>
      </div>

      <Card className="mt-4">
        <div className="w-full flex justify-between">
          <Button className="bg-primary-100" to={`/my-store/${props.params.id}/createnvm`}>
            <Text className="dark:text-primary-500 text-sm font-semibold">Add Product</Text>
          </Button>

          <div className="relative">
            <Icon icon="search" className="absolute top-1/2 -translate-y-1/2 text-primary-200 text-xl pl-1" />
            <Input className="w-[300px] bg-primary-100 bg-opacity-20 h-[28px] text-sm text-primary-100 pl-7 pr-2" placeholder="Search Product" onInput={(e) => handleSearchProduct(e)} />
          </div>
        </div>
      </Card>

      <Card className="mt-4">
        <Table<ProductItem> items={product?.items} headers={productHeaders} loading={productLoading} slots={{ price: <p>sd</p> }} />
      </Card>
    </>
  )
}
