import { RatingProps } from '@/types/components/rating'
import Star from '/public/icons/star.svg'
import StarFilled from '/public/icons/star_filled.svg'
import StarHalfFilled from '/public/icons/star_rate_half.svg'

const halfRated = (index: number, rating: number, tolerance: number) => {
  return Math.abs(index - rating) < tolerance
}

export const Rating = (props: RatingProps) => {
  const { rating = 0 } = props
  const array = [1, 2, 3, 4, 5]
  return (
    <div className="flex items-center space-x-2">
      {array.map((item, i) => (
        <div key={item}>
          {i + 1 <= rating ? (
            <StarFilled className="text-primary-200"></StarFilled>
          ) : halfRated(i + 1, rating, 1) ? (
            <StarHalfFilled className="text-primary-200"></StarHalfFilled>
          ) : (
            <Star className="text-primary-200"></Star>
          )}
        </div>
      ))}
    </div>
  )
}
