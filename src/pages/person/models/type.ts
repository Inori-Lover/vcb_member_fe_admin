import type { CommonList } from '@/utils/types/CommonList';
import type { UserCard } from '@/utils/types/UserCard';
import type { PersonInfo } from '@/utils/types/PersonInfo';

export namespace PersonModel {
  export const namespace = 'pages.person';
  export enum ActionType {
    reset = 'reset',
    getPersonInfo = 'getPersonInfo',
    getPersonInfoSuccess = 'getPersonInfoSuccess',
    getPersonInfoFail = 'getPersonInfoFail',
  }

  export interface Payload {
    [ActionType.reset]: undefined;
    [ActionType.getPersonInfo]: { uid: string };
    [ActionType.getPersonInfoSuccess]: undefined;
    [ActionType.getPersonInfoFail]: { error: Error };
  }
  export interface State {
    personInfo: PersonInfo.Item;
    cardList: CommonList<UserCard.Item>;
    userList: CommonList<PersonInfo.Item>;
  }
  export const createAction = <K extends keyof Payload>(key: K) => {
    return (payload: Payload[K]) => {
      return { type: `${namespace}/${key}`, payload: payload };
    };
  };
  export const currentState = (_: any): State => _[namespace];
}
