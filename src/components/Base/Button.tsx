import clsx from "clsx"
import Link from "next/link"
import { twMerge } from "tailwind-merge"

import { ButtonProps } from "@/types/components/button"

export const Button = (props: ButtonProps) => {
  const {
    name = '',
    type = 'button',
    to = '',
    size = 'md',
    disabled = false,
    block = false
  } = props

  const defaultClassName = 'opacity-90 active:opacity-100 bg-primary-400 rounded-md bg-primary-600 disabled:opacity-50'

  const sizeClass = {
    sm: 'px-2 py-[5px]',
    md: 'px-3 py-1',
    lg: 'px-3 py-2',
    xl: 'px-5 py-3'
  }
  return (
    <>
      {to ?
        <Link href={to}>
          <button
            name={name}
            disabled={disabled}
            type={type}
            className={twMerge(clsx(defaultClassName, sizeClass[size]), block ? 'w-full' : '', props.className)}
          >
            {props.children}
          </button>
        </Link>
        :
        <button
          name={name}
          disabled={disabled}
          type={type}
          className={twMerge(clsx(defaultClassName, sizeClass[size]), block ? 'w-full' : '', props.className)}
        >
          {props.children}
        </button>
      }
    </>
    
  )
}
