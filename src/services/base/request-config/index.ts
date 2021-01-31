import type { RequestConfig } from 'umi';

import * as requestInterceptors from './request-interceptors';
import * as responseInterceptors from './response-interceptors';
import * as responseAdaptor from './response-adaptor';

export const config: RequestConfig = {
  prefix: '/vcbs_member_api',
  headers: {},
  errorConfig: {
    adaptor: responseAdaptor.errorConfigAdaptor,
  },
  requestInterceptors: [requestInterceptors.tokenInterceptor],
  responseInterceptors: [
    responseInterceptors.loginInterceptor,
    responseInterceptors.tokenInterceptor,
  ],
};
