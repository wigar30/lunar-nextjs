import { TabListProps } from '@/types/components/Tab/tabList'

export const TabList = (props: TabListProps) => {
  return <div className="flex items-center">{props.children}</div>
}
