import { Params } from '@/types/app/router'
import { DetailTenantResponse } from '@/types/app/tenant'

export type OrderLists = {
  params: Params
  tenant?: DetailTenantResponse
}
