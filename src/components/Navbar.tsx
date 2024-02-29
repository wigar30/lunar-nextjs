/* eslint-disable @next/next/no-img-element */
import clsx from 'clsx'
import Link from 'next/link'
import { hasCookie } from 'cookies-next'
import { useEffect, useState } from 'react'

import { Input } from './Base/Input'
import { Text } from './Base/Text'
import ShoppingBag from '/public/icons/shopping_bag.svg'
import Storefront from '/public/icons/storefront.svg'

import { useUserStore } from '@/store/useUserStore'
import { usePathname } from 'next/navigation'

const checkStorePath = (currentPath: string): boolean => {
  return currentPath.startsWith('/my-store')
}

const checkCartPath = (currentPath: string): boolean => {
  return currentPath.startsWith('/my-cart')
}

export const Navbar = () => {
  const [search, setSearch] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isToken, setIsToken] = useState(false)
  const [inStore, setInStore] = useState(false)
  const [inCart, setInCart] = useState(false)

  const pathname = usePathname()
  const user = useUserStore((state) => state.user)

  useEffect(() => {
    const token = hasCookie('next.auth.access_token')
    setIsToken(token)
    setIsLoading(true)
  }, [])

  useEffect(() => {
    const isInStore = checkStorePath(pathname)
    setInStore(isInStore)

    const isInCart = checkCartPath(pathname)
    setInCart(isInCart)
  }, [pathname])

  return (
    <nav className="sticky top-0 border-b border-primary-200 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-10">
          <Link href="/">
            <img src="/images/lunar-logo.webp" alt="lunar-logo" width={200} height={200} sizes="100vw" className="w-auto h-20" />
          </Link>

          { !inStore && <Input className="w-[800px] h-10" placeholder="Search Lunar" onInput={(e) => setSearch(e.target.value)} />}
        </div>

        <div className="flex items-center space-x-4">
          {!inStore && (
            <div className="relative">
              <Link href="/my-store" className="mt-0.5 peer/store">
                <Storefront className="text-primary-800" />
              </Link>
              <div className="hidden w-36 bg-primary-50 rounded-md px-2 py-1 absolute right-0 border border-primary-400 peer-hover/store:flex">
                <Text className="text-xs">Start your own Store :)</Text>
              </div>
            </div>
          )}

          {!inStore && !inCart && <div className="w-[1px] h-10 bg-primary-800" />}

          {!inCart && (
            <Link href="/my-cart">
              <ShoppingBag className="text-primary-800" />
            </Link>
          )}

          <div className={clsx('flex items-center space-x-4', [!isToken && isLoading ? 'visible' : 'invisible'])}>
            <div className="w-[1px] h-10 bg-primary-800" />
            <Link href="/login">
              <span>Signin</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
