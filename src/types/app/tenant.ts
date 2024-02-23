import { LevelTenant } from './levelTenant'
import { PaginationRequest } from './ofetch/request'
import { PaginationResponse } from './ofetch/response'
import { Product } from './product'
import { SummaryStat } from './summaryStat'

export type ListTenantRequest = PaginationRequest

export type ListTenantResponse = {
  items: Tenant[]
} & PaginationResponse

export type Tenant = {
  id: string
  name: string
  totalProduct: number
  levelId: string
  levelTenant: LevelTenant
  products?: Product[]
  summaryStat: SummaryStat
}
