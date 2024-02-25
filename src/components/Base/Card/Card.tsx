import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'
import { CardProps } from '@/types/components/Card/card'
import { CardHeader } from './CardHeader'
import { CardFooter } from './CardFooter'

export const Card = (props: CardProps) => {
  const defaultClassName = 'w-full p-2 rounded-xl border-2 border-primary-800 bg-primary-600'
  return (
    <div className={twMerge(clsx(defaultClassName, props.className))} onClick={props.onClick}>
      {props.children}
    </div>
  )
}

Card.Header = CardHeader
Card.Footer = CardFooter
