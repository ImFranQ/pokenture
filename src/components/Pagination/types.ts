export interface PaginationComponentProps {
  total: number
  page: number
  next?: Function
  prev?: Function
  setPage?: Function
}
