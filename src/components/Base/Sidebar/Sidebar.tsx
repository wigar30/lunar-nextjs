import { SidebarProps } from '@/types/components/Sidebar/sidebar'
import { SidebarMenu } from './SidebarMenu'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'

export const Sidebar = (props: SidebarProps) => {
  const defaultClassName = 'siderbar flex flex-col border-r border-primary-600 space-y-1'
  return <aside className={twMerge(clsx(defaultClassName, props.className))}>{props.children}</aside>
}

Sidebar.Menu = SidebarMenu
