import { Controller, Get } from '@nestjs/common';
import {
  GetConfigDto,
  GetStatusDto,
  GetVersionDto,
} from '@the-homeless-god/node-nest-deno-common';

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
}
