import { PaginationParam } from '@/types/t-pagination';

import { Group } from '@/types/group';
import { BOOLEAN } from '@/types/golang-boolean';

export interface Item {
  id: string;
  retired: BOOLEAN;
  hide: BOOLEAN;
  avast: string;
  bio: string;
  nickname: string;
  job: string;
  order: number;
  group: string;
  uid: string;
}
export interface TinyItem
  extends Omit<Item, 'retired' | 'bio' | 'job' | 'order' | 'group'> {}

export interface ReadParam extends Partial<PaginationParam> {
  group?: Group.Item['id'];
  id?: Item['id'];
  uid?: Item['uid'];
  retired?: Item['retired'];
  keyword?: Item['id'] | Item['nickname'];
  sticky?: BOOLEAN;
  tiny?: BOOLEAN;
  includeHide?: BOOLEAN;
}
export interface ReadData {
  res: Item[];
  total: number;
}

export interface CreateParam extends Omit<Item, 'id'> {}
export interface CreateData {
  ID: string;
}

export interface UpdateParam extends Partial<Item> {
  id: Item['id'];
}
export interface UpdateData {
  ID: string;
}

export interface RemoveParam {
  id: string;
}

export interface TinyReadParam {
  includeHide?: boolean;
  inOrder?: boolean;
}
export interface TinyReadData {
  res: TinyItem[];
  total: number;
}
