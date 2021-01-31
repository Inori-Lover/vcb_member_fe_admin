import {
  ExtractPayloadFromAction,
  ACTION_IS_UNDEFINED,
} from '../extract-payload-from-action';

import { MayBeGlobalAction } from '../may-be-global-action';

export type ReducerConvertor<Reducers, N, S = any> = {
  [K in keyof Reducers]: Reducers[K] extends (
    state: S,
    action: infer Action,
  ) => S | void
    ? ExtractPayloadFromAction<Action> extends ACTION_IS_UNDEFINED
      ? () => MayBeGlobalAction<K, N, undefined, false>
      : (
          payload: ExtractPayloadFromAction<Action>,
        ) => MayBeGlobalAction<K, N, ExtractPayloadFromAction<Action>, false>
    : never;
};
