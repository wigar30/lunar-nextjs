import { TabHeaderProps } from '@/types/components/Tab/tabHeader'

export const TabHeader = (props: TabHeaderProps) => {
  return (
    <div className="first:rounded-l-full last:rounded-r-full px-2 border border-primary-400 bg-primary-200 cursor-pointer select-none active:bg-primary-300 transition-colors">{props.children}</div>
  )
}
