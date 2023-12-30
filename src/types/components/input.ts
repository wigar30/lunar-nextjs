import { HTMLInputTypeAttribute, MouseEventHandler } from 'react'

export type InputProps = {
  className?: string
  name?: string
  placeholder?: string
  value?: string | number
  required?: boolean
  type?: HTMLInputTypeAttribute
  onInput: (e: React.ChangeEvent<HTMLInputElement>) => void
}
