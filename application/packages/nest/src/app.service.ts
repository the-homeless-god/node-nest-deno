import { Injectable } from '@nestjs/common';

import { config } from './config';

@Injectable()
export class AppService {
  getVersion(): string {
    return config.version;
  }

  getConfig() {
    return config;
  }
}
