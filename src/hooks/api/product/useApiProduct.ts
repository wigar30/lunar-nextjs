import { DetailProductRequest, DetailProductResponse, ListProductPath, ListProductRequest, ListProductResponse } from '@/types/app/product'
import { useFetch } from '../useFetch'
import { Response } from '@/types/utils/ofetch/response'
import { FetchError } from 'ofetch'

export const useApiProduct = () => {
  const { apiFetch } = useFetch()

  const getProducts = async (path: ListProductPath, payload: ListProductRequest): Promise<ListProductResponse | undefined> => {
    try {
      const getListProducts = await apiFetch<Response<ListProductResponse>>(`/v1/tenant/${path.tenantId}/product`, { method: 'GET' }, null, payload)

      return getListProducts.data
    } catch (error) {
      if (error instanceof FetchError) {
        return Promise.reject(error.data?.message)
      }
      return Promise.reject(error)
    }
  }

  const getDetailProduct = async (payload: DetailProductRequest): Promise<DetailProductResponse | undefined> => {
    try {
      const getDetailProduct = await apiFetch<Response<DetailProductResponse>>(`/v1/tenant/${payload.tenantId}/product/${payload.productId}`, { method: 'GET' })

      return getDetailProduct.data
    } catch (error) {
      if (error instanceof FetchError) {
        return Promise.reject(error.data?.message)
      }
      return Promise.reject(error)
    }
  }

  return {
    getProducts,
    getDetailProduct
  }
}
