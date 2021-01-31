import { request } from 'umi';

import { PersonInfo } from '@/types/person-info';
import { PaginationParam } from '@/types/t-pagination';
import { Response } from '@/types/response-data';
import * as UserCard from './requests/user-card/types';
import { User } from '@/types/user';
import { BOOLEAN } from '@/types/golang-boolean';

import { Group as GroupType } from '@/types/group';

export namespace Services {
  export namespace Group {
    export type ReadResponse = Response.Ok<{
      res: GroupType.ItemInResponse[];
      total: number;
    }>;
    export const read = (): Promise<ReadResponse> => {
      return request('/group/list');
    };
  }
  export namespace Login {
    export interface LoginParam {
      /** 用户卡片的uid（不是id） */
      uid: string;
      password: string;
    }
    export type LoginResponse = Response.Ok<undefined>;
    export const login = (data: LoginParam) => {
      return request('/admin/login', {
        data,
        method: 'post',
      });
    };
  }
  export namespace Person {
    export interface InfoParam {
      uid: string;
    }
    export interface InfoData {
      cards: {
        res: UserCard.Item[];
        total: number;
      };
      users: {
        res: PersonInfo.ItemInResponse[];
        total: number;
      };
      info: PersonInfo.ItemInResponse;
    }
    export type InfoResponse = Response.Ok<InfoData>;
    export const info = (data: InfoParam): Promise<InfoResponse> => {
      return request('/admin/user/info', {
        data,
        method: 'post',
      });
    };
    export interface UpdateParam extends Partial<PersonInfo.ItemInResponse> {
      id: string;
    }
    export const update = (data: UpdateParam): Promise<Response.Ok> => {
      return request('/admin/user/update', {
        method: 'post',
        data,
      });
    };

    export interface PullMemberParam {
      uid: string;
      /** 组别id数组 */
      group: string[];
    }
    export const pullMember = (data: PullMemberParam): Promise<Response.Ok> => {
      return request('/admin/user/group/add', {
        method: 'post',
        data,
      });
    };

    export interface KickOffParam {
      uid: string;
      group: string;
    }
    export const kickoff = (data: KickOffParam) => {
      return request('/admin/user/kickoff', {
        method: 'post',
        data,
      });
    };

    export type ResetPassParam = Partial<UserCard.Item> & {
      uid: PersonInfo.ItemInResponse['id'];
      new?: string;
    };
    export type ResetPassResponse = Response.Ok<{
      newPass: string;
    }>;
    export const resetPass = (
      data: ResetPassParam,
    ): Promise<ResetPassResponse> => {
      return request('/admin/password/reset', {
        data,
        method: 'post',
      });
    };

    export type CreateParam = {
      group: string[];
      nickname: string;
    };
    export type CreateResponse = Response.Ok<{
      cardID: UserCard.Item['id'];
      UID: PersonInfo.ItemInResponse['id'];
      pass: string;
    }>;
    export const create = (data: CreateParam): Promise<CreateResponse> => {
      return request('/admin/user/create', {
        data,
        method: 'post',
      });
    };
  }
  export namespace UsersList {
    export interface ReadParam extends PaginationParam {
      id: string;
      keyword: string;
      /** group id */
      group: number;
      retired: BOOLEAN;
      includeBan: BOOLEAN;
    }
    export type ReadResponse = Response.Ok<{
      res: User.ItemInResponse[];
      total: number;
    }>;
    export const read = (data: ReadParam): Promise<ReadResponse> => {
      return request('/user/list', {
        data,
        method: 'get',
      });
    };
  }
}
