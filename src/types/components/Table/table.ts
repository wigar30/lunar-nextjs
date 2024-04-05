export type TableProps<T> = {
  className?: string
  children?: React.ReactNode
  loading: boolean
  items: T[] | undefined
  headers: TableHeader<T>[]
  slots?: {
    [key in keyof T]?: (data: T) => React.ReactNode
  }
}

export type TableHeader<T> = {
  key: keyof T
  label: string
  className?: string
}
