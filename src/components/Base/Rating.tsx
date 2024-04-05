import { RatingProps } from '@/types/app/rating'
import { Icon } from './Icon'

export const Rating = (props: RatingProps) => {
  const rating = 4
  const array = [1, 2, 3, 4, 5]
  return (
    <div className="flex items-center space-x-2">
      {array.map((item) => (
        <Icon icon="star" key={item} filled className="text-primary-200"></Icon>
      ))}
    </div>
  )
}
