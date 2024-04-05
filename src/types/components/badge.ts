export type BadgeProps = {
  type: keyof BadgeType
  children: React.ReactNode
  className?: string
}

export type BadgeType = {
  success: string
  error: string
  warning: string
  gray: string
  nobg: string
  bronze: string
  silver: string
  gold: string
  platinum: string
  diamond: string
}
