import { ProductItem } from '../store/my-store/product'
import { PaginationRequest } from './ofetch/request'
import { PaginationResponse } from './ofetch/response'

export type ListProductPath = {
  tenantId: string
}
export type ListProductRequest = PaginationRequest

export type ListProductResponse = {
  items: ProductItem[]
} & PaginationResponse

export type DetailProductResponse = ProductItem
