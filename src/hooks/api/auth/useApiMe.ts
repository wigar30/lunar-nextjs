'use client'

import useSWR from 'swr'
import { useFetch } from '../useFetch'

import { Response } from '@/types/app/ofetch/response'
import { User } from '@/types/store/user'

export const useApiMe = (shouldFetch: boolean = false) => {
  const { apiFetch } = useFetch()

  const {
    data: profile,
    error,
    isLoading
  } = useSWR<Response<User>>(shouldFetch ? '/v1/user/profile' : null, (url) => apiFetch(url, { method: 'GET' }), {
    shouldRetryOnError: false,
    revalidateOnFocus: false
  })

  return {
    profile: profile?.data,
    isLoading,
    isError: error
  }
}
