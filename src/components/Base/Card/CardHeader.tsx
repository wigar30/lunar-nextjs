import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'
import { CardHeaderProps } from '@/types/components/Card/cardHeader'

export const CardHeader = (props: CardHeaderProps) => {
  const defaultClassName = ''
  return <aside className="w-full flex justify-between items-center">{props.children}</aside>
}
