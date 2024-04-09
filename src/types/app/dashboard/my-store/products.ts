import { Product } from '@/types/api/product'
import { DetailTenantResponse } from '@/types/api/tenant'
import { Params } from '@/types/utils/router'

export type ProductLists = {
  params: Params
  tenant?: DetailTenantResponse
}

export type ProductDetail = {
  content: Product
}
