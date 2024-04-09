import { useFetch } from '../useFetch'
import { Response } from '@/types/utils/ofetch/response'
import { DetailTenantRequest, DetailTenantResponse, ListTenantRequest, ListTenantResponse } from '@/types/app/tenant'
import { FetchError } from 'ofetch'

export const useApiTenant = () => {
  const { apiFetch } = useFetch()

  const getTenants = async (payload: ListTenantRequest): Promise<ListTenantResponse | undefined> => {
    try {
      const getListTenants = await apiFetch<Response<ListTenantResponse>>('/v1/tenant/auth', { method: 'GET' }, null, payload)

      return getListTenants.data
    } catch (error) {
      if (error instanceof FetchError) {
        return Promise.reject(error.data?.message)
      }
      return Promise.reject(error)
    }
  }

  const getDetailTenant = async (payload: DetailTenantRequest): Promise<DetailTenantResponse | undefined> => {
    try {
      const getDetailTenant = await apiFetch<Response<DetailTenantResponse>>(`/v1/tenant/${payload.id}`, { method: 'GET' }, null, null)

      return getDetailTenant.data
    } catch (error) {
      if (error instanceof FetchError) {
        return Promise.reject(error.data?.message)
      }
      return Promise.reject(error)
    }
  }

  return {
    getTenants,
    getDetailTenant
  }
}
