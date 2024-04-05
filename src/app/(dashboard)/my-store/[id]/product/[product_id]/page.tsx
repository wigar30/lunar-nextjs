'use client'

import { Backnav } from '@/components/Backnav'
import { useApiProduct } from '@/hooks/api/product/useApiProduct'
import { DetailProductResponse } from '@/types/app/product'
import { Params } from '@/types/app/router'
import { useEffect, useState } from 'react'
import { Product } from './component/ProductDetail'

export default function Page({ params }: { params: Params }) {
  const [product, setProduct] = useState<DetailProductResponse>()

  const { getDetailProduct } = useApiProduct()

  useEffect(() => {
    getDetailProduct({ tenantId: params.id, productId: params.product_id }).then((res) => {
      setProduct(res)
    })
  }, [])
  return (
    <>
      <Backnav to={`/my-store/${params.id}`} className="container mx-auto mt-6" />
      <div className="container mx-auto grid grid-cols-12 mt-6">
        <div className="col-span-9">{product && <Product content={product} />}</div>
      </div>
    </>
  )
}
