import { ProductImage } from '@/types/api/product_images'
import { PaginationRequest } from '../utils/ofetch/request'
import { PaginationResponse } from '../utils/ofetch/response'

export type Product = {
  id: string
  tenantId: string
  name: string
  totalStock: number
  totalSold: number
  price: number
  description: string
  specification: string
  status: boolean
  productImages: ProductImage
  actions: string
}

export type ListProductPath = {
  tenantId: string
}
export type ListProductRequest = PaginationRequest

export type ListProductResponse = {
  items: Product[]
} & PaginationResponse

export type DetailProductRequest = {
  tenantId: string
  productId: string
}

export type DetailProductResponse = Product
