export type Response<T> = {
  data: T
  status: string
}

export type PaginationResponse = {
  limit: number
  page: number
  totalData: number
  totalPage: number
  anyNextPage: boolean
  anyPrevPage: boolean
}
