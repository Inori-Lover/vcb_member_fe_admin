import { Pagination, initalPagination } from './t-pagination';

export interface CommonList<T extends any> {
  data: T[];
  pagination: Pagination;
}

export const emptyList: CommonList<any> = {
  data: [],
  pagination: initalPagination,
};
