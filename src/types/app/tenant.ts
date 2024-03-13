import { LevelTenant } from './levelTenant'
import { PaginationRequest } from './ofetch/request'
import { PaginationResponse } from './ofetch/response'
import { SummaryStat } from './summaryStat'

export type ListTenantRequest = PaginationRequest

export type ListTenantResponse = {
  items: Tenant[]
} & PaginationResponse

export type DetailTenantRequest = {
  id: string
}

export type DetailTenantResponse = Tenant

export type Tenant = {
  id: string
  name: string
  total_product: number
  levelId: string
  levelTenant: LevelTenant
  summaryStat: SummaryStat
}
