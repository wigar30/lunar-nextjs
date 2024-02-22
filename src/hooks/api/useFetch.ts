import { getCookie } from 'cookies-next'
import { ofetch } from 'ofetch'

type FetchOptions = {
  method: 'POST' | 'GET' | 'PUT' | 'PATCH' | 'DELETE'
  accessToken?: string | undefined
}

export const useFetch = () => {
  const apiFetch = <T>(url: string, options: FetchOptions, payload: Record<string, any> | null = null, query: any) => {
    const token = getCookie('next.auth.access_token')

    return ofetch<T>(url, {
      baseURL: process.env.NEXT_PUBLIC_API,
      method: options.method,
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` })
      },
      body: payload ? JSON.stringify(payload) : null,
      query: query
    })
  }

  return { apiFetch }
}
