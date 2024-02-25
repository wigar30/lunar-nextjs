import { SidebarMenuProps } from '@/types/components/Sidebar/sidebarMenu'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

export const SidebarMenu = (props: SidebarMenuProps) => {
  const defaultClassName =
    'sidebar-menu relative w-fit select-none cursor-pointer after:absolute after:bg-primary-400 after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:transition-all after:duration-300'

  const handleActive = (e: React.SyntheticEvent) => {
    const sidebars = document.getElementsByClassName('sidebar-menu')
    Array.from(sidebars).forEach((item) => {
      item.classList.remove('active')
    })

    e.currentTarget.classList.add('active')
  }
  return (
    <div
      className={twMerge(clsx(defaultClassName, props.className))}
      onClick={(e) => {
        handleActive(e)
        props.onClick(e)
      }}
    >
      {props.children}
    </div>
  )
}
