export default interface PageResult<T> {
  pageCount?: number
  total?: number
  currentPage: number
  pageSize: number
  data?: T[]
}
