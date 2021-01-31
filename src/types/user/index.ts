import { Group } from '../group';
import { BOOLEAN } from '../golang-boolean';
import { CommonList } from '../common-list';
export namespace User {
  export interface ItemInResponse {
    id: string;
    // 逗号分隔
    admin: string;
    ban: BOOLEAN;
    avast: string;
    nickname: string;
    // 逗号分隔
    group: string;
  }
  export interface Item extends Omit<ItemInResponse, 'admin' | 'group'> {
    key: string;

    group: Group.Item[];

    admin: Group.Item[];
  }

  export type List = CommonList<Item>;
}
