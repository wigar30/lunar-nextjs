'use client'

import useSWR from 'swr'
import { useFetch } from '../useFetch'

import { Response } from '@/types/app/ofetch/response'
import { LoginResponse } from '@/types/app/login'

export const useApiLogin = (shouldFetch: boolean = false) => {
  const { apiFetch } = useFetch()

  const { data: token, error, isLoading } = useSWR<Response<LoginResponse>>(shouldFetch ? '/v1/user/profile' : null, (url) => apiFetch(url, { method: 'GET' }), {
    shouldRetryOnError: false,
    revalidateOnFocus: false
  })
  
  return {
    token: token?.data,
    isLoading,
    isError: error
  }
}
