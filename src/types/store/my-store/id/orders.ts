import { Params } from '@/types/app/router'
import { DetailTenantResponse } from '@/types/app/tenant'

export type Orders = {
  params: Params
  tenant?: DetailTenantResponse
}
