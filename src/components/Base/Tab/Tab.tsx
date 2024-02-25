'use client'

import { TabProps } from '@/types/components/Tab/tab'
import { TabHeader } from './TabHeader'
import { TabContent } from './TabContent'
import { TabList } from './TabList'

export const Tab = (props: TabProps) => {
  const defaultClassName = ''
  return (
    <div role="tab" className="flex flex-col">
      {props.children}
    </div>
  )
}

Tab.Header = TabHeader
Tab.Content = TabContent
Tab.List = TabList
