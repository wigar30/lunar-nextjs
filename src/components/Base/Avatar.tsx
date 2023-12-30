import { AvatarProps } from '@/types/components/avatar'

export const Avatar = (props: AvatarProps) => {
  const { id = 1, image = '', name = 'test' } = props
  return <div className="w-12 h-12 rounded-full bg-primary-400 cursor-pointer border-4 border-primary-500"></div>
}
