import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { InputProps } from '@/types/components/input'

export const Input = (props: InputProps) => {
  const { type = 'text', placeholder = '', name = 'input', required = false } = props

  const defaultClassName =
    'w-full rounded border border-grey-cold-200 px-5 py-3 text-md text-primary-700 placeholder-grey-cold-200 focus:z-10 focus:border-primary-400 focus:outline-none focus:ring-primary-400'

  return <input value={props.value} name={name} type={type} required={required} className={twMerge(clsx(defaultClassName, props.className))} placeholder={placeholder} onInput={props.onChange} />
}
