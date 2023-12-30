import { useSession } from 'next-auth/react'
import { ofetch } from 'ofetch'

type FetchOptions = {
  method: 'POST' | 'GET' | 'PUT' | 'PATCH' | 'DELETE'
}

export const useFetch = () => {
  const { data: session } = useSession()

  const apiFetch = (url: string, options: FetchOptions, payload: Record<string, any> | null = null) => {
    return ofetch(url, {
      baseURL: process.env.NEXT_PUBLIC_API,
      method: options.method,
      headers: {
        'Content-Type': 'application/json',
        ...(session?.token?.access_token && { Authorization: `Bearer ${session.token.access_token}` })
      },
      body: payload ? JSON.stringify(payload) : null
    })
  }

  return { apiFetch }
}
