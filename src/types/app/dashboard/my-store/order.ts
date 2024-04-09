import { DetailTenantResponse } from '@/types/api/tenant'
import { Params } from '@/types/utils/router'

export type OrderLists = {
  params: Params
  tenant?: DetailTenantResponse
}
