'use client'
import { LoginForms, LoginResponse } from '@/types/app/login'
import { useFetch } from '../useFetch'
import { Response } from '@/types/app/ofetch/response'
import { setCookie } from 'cookies-next'
import { FetchError } from 'ofetch'
import { jwtDecode } from 'jwt-decode'

export const useApiAuth = () => {
  const { apiFetch } = useFetch()

  const login = async (payload: LoginForms): Promise<LoginResponse | undefined> => {
    try {
      const login = await apiFetch<Response<LoginResponse>>('/v1/auth/login', { method: 'POST' }, payload, null)

      const claims = jwtDecode(login.data.access_token)
      if (claims.exp) {
        const unix = Math.floor(Date.now() / 1000)


        setCookie('next.auth.access_token', login.data.access_token, {
          maxAge: claims.exp - unix
        })
      } else {
        setCookie('next.auth.access_token', login.data.access_token)
      }

      return login.data
    } catch (error) {
      if (error instanceof FetchError) {
        return Promise.reject(error.data?.message)
      }
      return Promise.reject(error)
    }
  }

  return {
    login
  }
}
