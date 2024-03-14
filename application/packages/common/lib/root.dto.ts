import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

// GET /version
// Auth: required
export class GetVersionDto {
  @ApiProperty({ description: 'current version of api' })
  @IsString()
  @IsNotEmpty()
  version: string;
}

// GET /config
// Auth: required
export class GetConfigDto {
  @ApiProperty({ description: 'current version of api' })
  version: string;

  @ApiProperty({ description: 'current prefix of api before version' })
  prefix: string;

  @ApiProperty({ description: 'current environment' })
  environment: string | 'development';
}

// GET /controller
// Auth: required
export class GetStatusDto {
  @ApiProperty({ description: 'healthcheck for api' })
  @IsString()
  @IsNotEmpty()
  message: 'ok';
}
