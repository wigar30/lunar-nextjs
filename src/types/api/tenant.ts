import { PaginationRequest } from '../utils/ofetch/request'
import { PaginationResponse } from '../utils/ofetch/response'
import { LevelTenant } from './level_tenant'
import { SummaryStat } from './summaryStat'

export type Tenant = {
  id: string
  name: string
  total_product: number
  levelId: string
  levelTenant: LevelTenant
  summaryStat: SummaryStat
}

export type ListTenantRequest = PaginationRequest

export type ListTenantResponse = {
  items: Tenant[]
} & PaginationResponse

export type DetailTenantRequest = {
  id: string
}

export type DetailTenantResponse = Tenant
