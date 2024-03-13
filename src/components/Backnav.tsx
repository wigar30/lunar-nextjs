import { twMerge } from 'tailwind-merge'
import { Icon } from './Base/Icon'
import { BacknavProps } from '@/types/components/Nav/backnav'
import clsx from 'clsx'
import { Text } from './Base/Text'
import Link from 'next/link'

export const Backnav = (props: BacknavProps) => {
  const defaultClassName = 'w-full flex items-center justify-between'
  return (
    <div className={twMerge(clsx(defaultClassName, props.className))}>
      <Link className="w-40 px-3 py-2 rounded-xl border-2 border-primary-800 bg-primary-600 space-x-2 flex items-center" href={props.to}>
        <Icon icon="arrow_back_ios" className="text-primary-100 font-semibold" />
        <Text className="dark:text-primary-100 text-base" weight="semibold">
          Back
        </Text>
      </Link>

      {props.children}
    </div>
  )
}
