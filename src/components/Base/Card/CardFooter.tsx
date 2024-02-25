import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'
import { CardFooterProps } from '@/types/components/Card/cardFooter'

export const CardFooter = (props: CardFooterProps) => {
  const defaultClassName = ''
  return <aside className="">{props.children}</aside>
}
