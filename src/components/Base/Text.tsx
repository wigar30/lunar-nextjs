import { TextProps, Weight } from '@/types/components/text'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

export const Text = (props: TextProps) => {
  const { weight = 'normal', className = '' } = props

  const weightClass: Weight = {
    thin: 'font-thin',
    extralight: 'font-extralight',
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
    extrabold: 'font-extrabold',
    black: 'font-black'
  }
  return (
    <p className={twMerge(clsx(`text-primary-200 dark:text-primary-800 ${weightClass[weight]}`, className))} onClick={props.onClick}>
      {props.children}
    </p>
  )
}
