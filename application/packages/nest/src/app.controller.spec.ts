import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  it('should return version"', () => {
    expect(appController.version()).toStrictEqual({
      version: 'v1',
    });
  });

  it('should return config"', () => {
    const expected = {
      nest: {
        local: {
          host: 'localhost',
          port: 3000,
          protocol: 'http://',
        },
      },

      node: {
        local: {
          host: 'localhost',
          port: 3001,
          protocol: 'http://',
        },
      },

      deno: {
        local: {
          host: 'localhost',
          port: 3002,
          protocol: 'http://',
        },
      },

      isDevelopment: false,
      isLocal: false,
      isTest: true,

      version: 'v1',
      prefix: 'api',
      environment: 'test',
    };

    const actual = appController.config();

    expect({
      ...actual,
      environment: 'test',

      isDevelopment: true,
      isTest: false,
    }).toStrictEqual({
      ...expected,
      isDevelopment: true,
      isTest: false,
    });
  });

  it("should return controller's status", () => {
    expect(appController.controller()).toStrictEqual({
      message: 'ok',
    });
  });

  describe('GET: hello', () => {
    it("should return hello message", () => {
      expect(appController.hello('name')).toStrictEqual('Hello name!');
    });

    it("should return error when no hello-message provided", () => {
      expect(() => appController.hello(undefined)).toThrow('user name is not provided yet');
    });
  })
});
