export type BadgeProps = {
  type: keyof BadgeType
  children: React.ReactNode
}

export type BadgeType = {
  success: string
  error: string
  warning: string
  nobg: string
  bronze: string
  silver: string
  gold: string
  platinum: string
  diamond: string
}
