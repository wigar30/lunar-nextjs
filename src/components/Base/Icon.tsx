import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'
import { IconProps } from '@/types/components/icon'
import { Text } from './Text'

export const Icon = (props: IconProps) => {
  return (
    <>
      {props.tooltip ? (
        <div className="relative">
          <span className={twMerge(clsx('material-symbols-rounded cursor-default select-none peer/icon', props.className))}>{props.icon}</span>
          <div className="hidden w-fit bg-primary-500 rounded-md px-2 py-0.5 absolute left-0 peer-hover/icon:flex">
            <Text className="text-xs font-medium dark:text-primary-100">{props.tooltip}</Text>
          </div>
        </div>
      ) : (
        <span className={twMerge(clsx('material-symbols-rounded cursor-default select-none', props.className))}>{props.icon}</span>
      )}
    </>
  )
}
