import { Group } from '../group';
import { CommonList } from '../common-list';

import {
  Item as ItemInResponse,
  TinyItem as TinyItemInResponse,
} from '@/services/requests/user-card/types';

export interface Item extends Omit<ItemInResponse, 'group'> {
  key: string;
  group: Group.Item[];

  originAvast: string;
}
export interface TinyItem extends TinyItemInResponse {
  key: string;

  originAvast: string;
}
export type List = CommonList<Item>;
export type TinyList = CommonList<TinyItem>;
