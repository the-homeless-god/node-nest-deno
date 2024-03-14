import { Controller, Get, InternalServerErrorException, Query, Res } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import {
  GetConfigDto,
  GetStatusDto,
  GetVersionDto,
} from '@the-homeless-god/node-nest-deno-common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

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
  hello(@Query('user-name') username: string, @Res() response) {
    if (username.length === 0) {
      throw new InternalServerErrorException();
    }

    const output = `Hello ${username}!`;

    response.send(output);
  }
}
