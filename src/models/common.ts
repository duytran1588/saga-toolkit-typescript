export interface Pagination {
  _limit: number;
  _page: number;
  _totalRows: number;
}

export interface ListResponse<T> {
  data: T[];
  pagination: Pagination;
}

export interface ListParams {
  _page?: number;
  _limit?: number;
  _sort?: string;
  _order?: "asc" | "desc";
  [key: string]: any;
}
