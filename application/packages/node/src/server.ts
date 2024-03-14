import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { Application } from 'express';
import getRoutes from 'express-list-endpoints';

import { initRouter } from './router';
import { SERVER_HAS_BEEN_HOSTED } from './utils/dictionary';
import {
  PORT,
} from './utils/environment';

const configurateApplication = (application: Application): Application => {
  application.use(
    cors({
      origin: '*',
      credentials: true,
    }),
  );

  application.use(bodyParser.json());
  application.use(bodyParser.urlencoded({ extended: true }));

  application.use(cookieParser());

  initRouter(application);

  return application;
};

const application = express();

configurateApplication(application).listen(PORT, (): void => {
  console.info(SERVER_HAS_BEEN_HOSTED);
  console.info(getRoutes(application));
});
