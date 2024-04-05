import { Params } from '@/types/app/router'
import { DetailTenantResponse } from '@/types/app/tenant'
import { ProductItem } from '@/types/store/my-store/product'

export type ProductLists = {
  params: Params
  tenant?: DetailTenantResponse
}

export type ProductDetail = {
  content: ProductItem
}
