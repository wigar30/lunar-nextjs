import Link from 'next/link'
import Image from 'next/image'
import { Avatar } from './Base/Avatar'
import { NavbarProps } from '@/types/components/Nav/navbar'
import { Text } from './Base/Text'
import { Badge } from './Base/Badge'
import { useUserStore } from '@/store/useUserStore'
import clsx from 'clsx'
import { Input } from './Base/Input'
import { useState } from 'react'

export const Navbar = () => {
  const [search, setSearch] = useState('')

  const user = useUserStore((state) => state.user)
  return (
    <nav className="sticky top-0 border-b border-primary-200">
      <div className="container mx-auto flex items-center justify-between backdrop-blur-md">
        <Link href="/">
          <Image src="/images/lunar-logo.webp" alt="lunar-logo" width={200} height={200} sizes="100vw" className="w-auto h-20" />
        </Link>

        <Input className="w-[800px] h-10" placeholder="Search Lunar" onInput={(e) => setSearch(e.target.value)} />

        <div className={clsx([user?.id ? 'flex items-center space-x-4' : 'hidden'])}>
          <Link href="/login" className={clsx([user?.id ? 'hidden' : 'block'])}>
            <span>Signin</span>
          </Link>

          <div className="flex flex-col items-center space-y-1">
            <Text className="text-sm">{user?.name}</Text>
            <Badge type="nobg">{'level'}</Badge>
          </div>
          <Avatar></Avatar>
        </div>
      </div>
    </nav>
  )
}
