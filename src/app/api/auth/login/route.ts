import { Response as ResponseType } from '@/types/app/ofetch/response'
import { LoginResponse } from '@/types/app/login'
import { useFetch } from '@/hooks/api/useFetch'
import { cookies } from 'next/headers'

export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  const body = await request.json()
  const { apiFetch } = useFetch()

  const { data } = await apiFetch<ResponseType<LoginResponse>>('/v1/auth/login', { method: 'POST' }, body)

  cookies().set('next.auth.access_token', data.access_token)

  return Response.json({ data })
}
