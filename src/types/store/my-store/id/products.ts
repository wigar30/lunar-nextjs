import { Params } from '@/types/app/router'
import { DetailTenantResponse } from '@/types/app/tenant'

export type Products = {
  params: Params
  tenant?: DetailTenantResponse
}
