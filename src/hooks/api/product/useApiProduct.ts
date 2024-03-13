import { ListProductPath, ListProductRequest, ListProductResponse } from '@/types/app/product'
import { useFetch } from '../useFetch'
import { Response } from '@/types/app/ofetch/response'
import { FetchError } from 'ofetch'

export const useApiProduct = () => {
  const { apiFetch } = useFetch()

  const getProducts = async (path: ListProductPath, payload: ListProductRequest): Promise<ListProductResponse | undefined> => {
    try {
      const getListTenants = await apiFetch<Response<ListProductResponse>>(`/v1/tenant/${path.tenantId}/product`, { method: 'GET' }, null, payload)

      return getListTenants.data
    } catch (error) {
      if (error instanceof FetchError) {
        return Promise.reject(error.data?.message)
      }
      return Promise.reject(error)
    }
  }

  return {
    getProducts
  }
}
