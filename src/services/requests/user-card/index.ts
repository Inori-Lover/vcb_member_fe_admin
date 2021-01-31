import { request } from 'umi';
import { userCardAPI } from '@/services/apis';
import { Response as Response } from '@/types/response-data';
import { BOOLEAN } from '@/types/golang-boolean';

import * as Types from './types';
export { Types };

export const read = (params: Types.ReadParam) => {
  return request<Response.Ok<Types.ReadData>>(userCardAPI.read, { params });
};

export const create = (data: Types.CreateParam) => {
  return request<Response.Ok<Types.CreateData>>(userCardAPI.create, {
    data,
    method: 'post',
  });
};

export const update = (data: Types.UpdateParam) => {
  return request<Response.Ok<Types.UpdateData>>(userCardAPI.update, {
    data,
    method: 'post',
  });
};

/** 移除卡片 */
export const remove = (data: Types.RemoveParam) => {
  return request<void>(userCardAPI.remove, {
    data,
    method: 'post',
  });
};
export const tinyRead = ({
  includeHide,
  inOrder = true,
}: Types.TinyReadParam) => {
  return request<Response.Ok<Types.TinyReadData>>(userCardAPI.read, {
    params: {
      tiny: BOOLEAN.yes,
      includeHide: includeHide ? BOOLEAN.yes : BOOLEAN.no,
      inOrder: inOrder ? BOOLEAN.yes : BOOLEAN.no,
    },
  });
};
