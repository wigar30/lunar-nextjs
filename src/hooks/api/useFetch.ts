import { ofetch } from 'ofetch'

type FetchOptions = {
  method: 'POST' | 'GET' | 'PUT' | 'PATCH' | 'DELETE'
  accessToken?: string | undefined
}

export const useFetch = () => {
  const apiFetch = <T>(url: string, options: FetchOptions, payload: Record<string, any> | null = null) => {
    return ofetch<T>(url, {
      baseURL: process.env.NEXT_PUBLIC_API,
      method: options.method,
      headers: {
        'Content-Type': 'application/json',
        ...(options.accessToken && { Authorization: `Bearer ${options.accessToken}` })
      },
      body: payload ? JSON.stringify(payload) : null
    })
  }

  return { apiFetch }
}
