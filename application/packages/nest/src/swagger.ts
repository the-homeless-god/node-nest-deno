import { NestExpressApplication } from '@nestjs/platform-express';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { servers } from '@the-homeless-god/node-nest-common';

import * as swaggerStats from 'swagger-stats';

import { config } from './config';

export const setupSwagger = (app: NestExpressApplication) => {
  const swaggerConfig = new DocumentBuilder()
    .setTitle('API')
    .setDescription('Open API')
    .setVersion('1.0');

  if (!config.isLocal) {
    servers.forEach((server) => {
      swaggerConfig.addServer(server);
      app.enableCors({ origin: server });
    });
  }

  const swaggerBuiltConfig = swaggerConfig.build();

  const document = SwaggerModule.createDocument(app, swaggerBuiltConfig);

  app.use(
    swaggerStats.getMiddleware({
      uriPath: `/${config.prefix}/${config.version}/swagger-stats`,
      // swaggerSpec: document,
    }),
  );

  SwaggerModule.setup(
    `/${config.prefix}/${config.version}/swagger`,
    app,
    document,
  );
};
