import { BadgeProps, BadgeType } from '@/types/components/badge'
import { Text } from './Text'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

export const Badge = (props: BadgeProps) => {
  const { type = 'nobg' } = props

  const defaultClassName = 'w-fit px-3 py-[1px] rounded-full bg-primary-400 border border-primary-800'

  const typeBadge: BadgeType = {
    nobg: 'bg-transparent bg-gray-600',
    gray: 'bg-gray-200 border-gray-800',
    success: 'bg-success-200 border-success-800',
    error: 'bg-error-200 border-error-800',
    warning: 'bg-warning-200 border-warning-800',
    bronze: 'bg-gray-200 border-gray-800',
    silver: 'bg-gray-200 border-gray-800',
    gold: 'bg-gray-200 border-gray-800',
    platinum: 'bg-gray-200 border-gray-800',
    diamond: 'bg-gray-200 border-gray-800'
  }
  const textBadge: BadgeType = {
    nobg: 'text-gray-600',
    gray: 'text-gray-800',
    success: 'text-success-800',
    error: 'text-error-800',
    warning: 'text-warning-800',
    bronze: 'text-gray-800',
    silver: 'text-gray-800',
    gold: 'text-gray-800',
    platinum: 'text-gray-800',
    diamond: 'text-gray-800'
  }
  return (
    <div className={twMerge(clsx(defaultClassName, typeBadge[type], props.className))}>
      <Text className={clsx('text-[12px]', textBadge[type])}>{props.children}</Text>
    </div>
  )
}
