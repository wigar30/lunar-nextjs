import { TableProps } from '@/types/components/Table/table'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'
import { Text } from '../Text'

export const Table = <T extends any>(props: TableProps<T>) => {
  const defaultClassName = 'table-auto w-full'

  const getPropertyValue = (obj: any, path: string): any => {
    return path.split('.').reduce((acc, prop) => (acc ? acc[prop] : '-'), obj) ?? '-'
  }

  return (
    <>
      <table className={twMerge(clsx(defaultClassName, props.className))}>
        <thead>
          <tr>
            {props.headers.map((item, i) => (
              <th key={i} className={twMerge(clsx('text-left pb-2 px-2', item.className))}>
                <Text weight="semibold" className="dark:text-primary-100">
                  {item.label}
                </Text>
              </th>
            ))}
          </tr>
        </thead>

        {!props.loading && Boolean(props?.items?.length) && (
          <tbody>
            {props.items?.map((item, index) => (
              <tr key={index} className="hover:bg-primary-700">
                {props.headers.map((head, indexKey) => (
                  <td key={indexKey} className={twMerge(clsx('py-2 px-2 first:rounded-l-md last:rounded-r-md', head.className))}>
                    {props.slots && props.slots[head.key as keyof T] ? (
                      <>{props.slots[head.key]?.(item)}</>
                    ) : (
                      <Text weight="medium" className="dark:text-primary-50">
                        {getPropertyValue(item, head.key as string)}
                      </Text>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </>
  )
}
