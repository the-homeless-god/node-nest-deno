import { getHelloMessage } from '@the-homeless-god/node-nest-common'
import { Router } from 'express';

import { Routers } from './types';

export const initHelloRoute = (router: Router): void => {
  router.use(Routers.hello, (request, response) => {
    const queryParam: string = request.query['user-name'] as string;

    response.send(getHelloMessage(queryParam));
  });
};
