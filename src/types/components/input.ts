import { HTMLInputTypeAttribute } from "react"

export type InputProps = {
  className?: string
  name?: string
  placeholder?: string
  value?: string | number
  required?: boolean
  type?: HTMLInputTypeAttribute
  onChange:(e: React.ChangeEvent<HTMLInputElement>) => void
}