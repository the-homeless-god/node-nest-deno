import express, { Application, Router } from 'express';

import { initHelloRoute } from './routes/hello';

export const getRouter = (): Router => {
  const router = express.Router();

  initHelloRoute(router);

  return router;
};

export const initRouter = (application: Application): void => {
  const router = getRouter();


  application.use(router);

};
