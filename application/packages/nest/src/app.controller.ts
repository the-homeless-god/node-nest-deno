import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import {
  GetConfigDto,
  GetStatusDto,
  GetVersionDto,
  getHelloMessage,
} from '@the-homeless-god/node-nest-common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('version')
  version(): GetVersionDto {
    return {
      version: this.appService.getVersion(),
    };
  }

  @Get('config')
  config(): GetConfigDto {
    return this.appService.getConfig();
  }

  @Get('controller')
  controller(): GetStatusDto {
    return { message: 'ok' };
  }

  @Get('hello')
  @ApiOperation({ summary: 'Greetings for provided username' })
  @ApiResponse({ status: 200 })
  hello(@Query('user-name') username: string) {
    return getHelloMessage(username);
  }
}
