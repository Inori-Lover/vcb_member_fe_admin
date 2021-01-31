import { BOOLEAN } from '../golang-boolean';
import { Group } from '../group';

export namespace PersonInfo {
  export interface ItemInResponse {
    id: string;
    avast: string;
    nickname: string;
    /** 逗号分隔的组别 */
    admin: string;
    /** 逗号分隔的组别 */
    group: string;
    ban: BOOLEAN;
  }
  export interface Item extends Omit<ItemInResponse, 'admin' | 'group'> {
    key: string;

    originAvast: string;

    /** 分组ID */
    admin: Group.Item[];
    /** 分组ID */
    group: Group.Item[];
    loading?: boolean;
  }
}
