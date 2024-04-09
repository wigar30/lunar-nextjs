import { Badge } from '@/components/Base/Badge'
import { Card } from '@/components/Base/Card/Card'
import { Rating } from '@/components/Base/Rating'
import { Text } from '@/components/Base/Text'
import { useCurrency } from '@/hooks/utils/currency'
import { ProductDetail } from '@/types/app/dashboard/my-store/products'

export const Product = (props: ProductDetail) => {
  const { content } = props

  const { convertToCurrency } = useCurrency('id')
  const price = convertToCurrency(content.price)
  return (
    <Card>
      <Card.Header>
        <Text weight="semibold" className="dark:text-primary-200">
          Detail Product
        </Text>
        <Badge type={content.status ? 'success' : 'warning'}>{content.status ? 'Published' : 'Archived'}</Badge>
      </Card.Header>

      <Text weight="semibold" className="text-3xl dark:text-primary-200 mt-4">
        {content.name}
      </Text>

      <div className="w-full grid grid-cols-12 gap-4">
        <div className="col-span-7">
          <Rating rating={3.7}></Rating>
          <Text className="text-sm dark:text-primary-100">
            Sold <span className="font-bold">{content.totalSold}</span>
          </Text>
          <Text className="text-sm dark:text-primary-100">{content.description}</Text>

          <span className="flex items-end mt-6">
            <Text weight="semibold" className="text-xl dark:text-primary-100 mr-1">
              {price.currency}
            </Text>

            <Text weight="semibold" className="text-5xl dark:text-primary-100">
              {price.value}
            </Text>
          </span>
        </div>
        <div className="col-span-5">
          {}
          <div className="mt-4 p-2 border-2 border-dashed border-primary-100 bg-primary-400 rounded-lg">
            <Text>Image for this product not provided</Text>
          </div>
        </div>
      </div>

      <div></div>
    </Card>
  )
}
