import { NestFactory } from '@nestjs/core';

import { NestExpressApplication } from '@nestjs/platform-express';
import { getEnvironmentConfiguration } from '@the-homeless-god/node-nest-deno-common';

import { AppModule } from './app.module';

import { config } from './config';
import { setupSwagger } from './swagger';

async function bootstrap() {
  const configuration = getEnvironmentConfiguration();

  const app: NestExpressApplication = await NestFactory.create(AppModule, {
    rawBody: true,
  });
  app.setGlobalPrefix(`${config.prefix}/${config.version}`);

  setupSwagger(app);

  if (configuration.isDevelopment) {
    console.info(configuration);

    app.use((_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
      res.header('Access-Control-Allow-Headers', 'Content-Type, Accept');
      next();
    });

    app.enableCors({
      allowedHeaders: '*',
      origin: '*',
    });
  }

  await app.listen(configuration.nest.local.port);
}

bootstrap();
