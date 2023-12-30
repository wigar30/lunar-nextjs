'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

import { Text } from '@/components/Base/Text'
import { Input } from '@/components/Base/Input'
import { Button } from '@/components/Base/Button'
import { GuestPageWrapper } from '@/components/PageWrapper/GuestPageWrapper'

import { LoginForms, LoginResponse } from '@/types/app/login'
import { Response as ResponseType } from '@/types/app/ofetch/response'

const getData = async (forms: LoginForms): Promise<ResponseType<LoginResponse> | undefined> => {
  const login = await fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(forms)
  })

  if (login.ok) return login.json()
  else return
}

export default function Page() {
  const [animate, setAnimate] = useState(false)
  const [animateDestroy, setAnimateDestroy] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const [forms, setForms] = useState<LoginForms>({
    email: '',
    password: ''
  })

  const router = useRouter()

  useEffect(() => {
    setAnimate(true)
  }, [])

  const handleSeePassword = () => {
    setShowPassword(!showPassword)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const login = await getData(forms)

      router.push('/')
    } catch (error) {}
  }

  const handleClickToRegister = () => {
    setAnimateDestroy(true)
  }
  const handleAnimationEnd = () => {
    if (!animateDestroy) return

    router.push('/register')
  }
  return (
    <GuestPageWrapper>
      <main className="w-full h-screen bg-primary-100 dark:bg-primary-800">
        <section className="w-full h-full flex relative">
          <div className={clsx('w-1/3 h-full bg-primary-950 dark:bg-primary-50 transition-all flex flex-col items-center px-4 py-8')}>
            <Text className="text-6xl pointer-events-none select-none" weight="medium">
              Lunar
            </Text>
            <Text className="text-sm pointer-events-none select-none" weight="normal">
              Belanja hemat sepuasnya hanya di Lunar Marketplace.
            </Text>

            <form className="mt-6 w-full px-6" method="post" onSubmit={handleSubmit}>
              <label htmlFor="email" className="mt-2">
                <Text weight="semibold" className="mt-2">
                  Email
                </Text>
                <Input name="email" type="email" required placeholder="Email" onInput={(e) => setForms({ ...forms, email: e.target.value })} />
              </label>

              <label htmlFor="password" className="mt-6">
                <Text weight="semibold" className="mt-2">
                  Password
                </Text>
                <div className="relative">
                  <Input name="password" type={showPassword ? 'text' : 'password'} required placeholder="Password" onInput={(e) => setForms({ ...forms, password: e.target.value })} />

                  <div className="absolute inset-y-[35%] right-0 pr-3 text-sm">
                    <svg
                      className={clsx({ hidden: !showPassword, block: showPassword }, 'h-4 text-gray-500 cursor-pointer')}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      onClick={handleSeePassword}
                    >
                      <path
                        fill="currentColor"
                        d="M160 256C160 185.3 217.3 128 288 128C358.7 128 416 185.3 416 256C416 326.7 358.7 384 288 384C217.3 384 160 326.7 160 256zM288 336C332.2 336 368 300.2 368 256C368 211.8 332.2 176 288 176C287.3 176 286.7 176 285.1 176C287.3 181.1 288 186.5 288 192C288 227.3 259.3 256 224 256C218.5 256 213.1 255.3 208 253.1C208 254.7 208 255.3 208 255.1C208 300.2 243.8 336 288 336L288 336zM95.42 112.6C142.5 68.84 207.2 32 288 32C368.8 32 433.5 68.84 480.6 112.6C527.4 156 558.7 207.1 573.5 243.7C576.8 251.6 576.8 260.4 573.5 268.3C558.7 304 527.4 355.1 480.6 399.4C433.5 443.2 368.8 480 288 480C207.2 480 142.5 443.2 95.42 399.4C48.62 355.1 17.34 304 2.461 268.3C-.8205 260.4-.8205 251.6 2.461 243.7C17.34 207.1 48.62 156 95.42 112.6V112.6zM288 80C222.8 80 169.2 109.6 128.1 147.7C89.6 183.5 63.02 225.1 49.44 256C63.02 286 89.6 328.5 128.1 364.3C169.2 402.4 222.8 432 288 432C353.2 432 406.8 402.4 447.9 364.3C486.4 328.5 512.1 286 526.6 256C512.1 225.1 486.4 183.5 447.9 147.7C406.8 109.6 353.2 80 288 80V80z"
                      />
                    </svg>
                    <svg
                      className={clsx({ block: !showPassword, hidden: showPassword }, 'h-4 text-gray-500 cursor-pointer')}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                      onClick={handleSeePassword}
                    >
                      <path
                        fill="currentColor"
                        d="M150.7 92.77C195 58.27 251.8 32 320 32C400.8 32 465.5 68.84 512.6 112.6C559.4 156 590.7 207.1 605.5 243.7C608.8 251.6 608.8 260.4 605.5 268.3C592.1 300.6 565.2 346.1 525.6 386.7L630.8 469.1C641.2 477.3 643.1 492.4 634.9 502.8C626.7 513.2 611.6 515.1 601.2 506.9L9.196 42.89C-1.236 34.71-3.065 19.63 5.112 9.196C13.29-1.236 28.37-3.065 38.81 5.112L150.7 92.77zM189.8 123.5L235.8 159.5C258.3 139.9 287.8 128 320 128C390.7 128 448 185.3 448 256C448 277.2 442.9 297.1 433.8 314.7L487.6 356.9C521.1 322.8 545.9 283.1 558.6 256C544.1 225.1 518.4 183.5 479.9 147.7C438.8 109.6 385.2 79.1 320 79.1C269.5 79.1 225.1 97.73 189.8 123.5L189.8 123.5zM394.9 284.2C398.2 275.4 400 265.9 400 255.1C400 211.8 364.2 175.1 320 175.1C319.3 175.1 318.7 176 317.1 176C319.3 181.1 320 186.5 320 191.1C320 202.2 317.6 211.8 313.4 220.3L394.9 284.2zM404.3 414.5L446.2 447.5C409.9 467.1 367.8 480 320 480C239.2 480 174.5 443.2 127.4 399.4C80.62 355.1 49.34 304 34.46 268.3C31.18 260.4 31.18 251.6 34.46 243.7C44 220.8 60.29 191.2 83.09 161.5L120.8 191.2C102.1 214.5 89.76 237.6 81.45 255.1C95.02 286 121.6 328.5 160.1 364.3C201.2 402.4 254.8 432 320 432C350.7 432 378.8 425.4 404.3 414.5H404.3zM192 255.1C192 253.1 192.1 250.3 192.3 247.5L248.4 291.7C258.9 312.8 278.5 328.6 302 333.1L358.2 378.2C346.1 381.1 333.3 384 319.1 384C249.3 384 191.1 326.7 191.1 255.1H192z"
                      />
                    </svg>
                  </div>
                </div>
              </label>
              <div className="w-full flex justify-end">
                <Link href="/forgot-password">
                  <Text className="text-sm">Lupa Password</Text>
                </Link>
              </div>
              <Button type="submit" size="lg" block className="mt-4">
                Login
              </Button>
            </form>

            <div className="w-full flex justify-center mt-6 space-x-1">
              <Text className="text-xs">Belum Punya Akun?</Text>
              <Text className="text-xs cursor-pointer" onClick={handleClickToRegister}>
                Daftar Sekarang
              </Text>
            </div>
          </div>
          <div
            className={clsx(
              [animate ? 'w-2/3' : 'w-full'],
              [animateDestroy ? 'w-full' : 'w-1/3'],
              'h-full transition-all delay-100 duration-500 bg-primary-200 dark:bg-primary-800 flex-none absolute right-0'
            )}
            onTransitionEnd={handleAnimationEnd}
          />
        </section>
      </main>
    </GuestPageWrapper>
  )
}
