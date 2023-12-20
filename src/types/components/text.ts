export type TextProps = {
  className?: string
  weight?: keyof Weight
  children: React.ReactNode
}

export type Weight = {
  thin: string
  extralight: string
  light: string
  normal: string
  medium: string
  semibold: string
  bold: string
  extrabold: string
  black: string
}