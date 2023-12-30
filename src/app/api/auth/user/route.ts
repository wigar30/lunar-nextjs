import { cookies } from 'next/headers'

import { useFetch } from '@/hooks/api/useFetch'

import { Response as ResponseType } from '@/types/app/ofetch/response'
import { User } from '@/types/store/user'

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  const { apiFetch } = useFetch()

  const cookie = cookies()
  const accessToken = cookie.get('next.auth.access_token')?.value

  const { data } = await apiFetch<ResponseType<User>>('/v1/user/profile', { method: 'GET', accessToken })

  return Response.json({ data })
}
