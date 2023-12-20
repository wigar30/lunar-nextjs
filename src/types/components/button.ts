export type ButtonProps = {
  name?: string
  to?: string
  size?: keyof Size
  disabled?: boolean
  block?: boolean
  type?: 'submit' | 'reset' | 'button'
  children: React.ReactNode
  className?: string
}

export type Size = {
  sm: string
  md: string
  lg: string
  xl: string
}
