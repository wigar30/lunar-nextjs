import { BadgeProps } from '@/types/components/badge'
import { Text } from './Text'
import clsx from 'clsx'

export const Badge = (props: BadgeProps) => {
  const { type = 'nobg' } = props
  return (
    <div className={clsx('w-fit px-3 py-[1px] rounded-full', 'bg-gray-400')}>
      <Text className="text-[11px]">{props.children}</Text>
    </div>
  )
}
