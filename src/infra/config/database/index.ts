import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

@Injectable()
export class DatabaseConfig implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> {
    const host = this.configService.get('DB_HOST');
    const port = this.configService.get('DB_PORT');
    const username = this.configService.get('DB_USER');
    const password = this.configService.get('DB_PASS');
    const database = this.configService.get('DB_NAME');

    const path =
      this.configService.get('NODE_ENV') === 'database' ? 'src' : 'dist';

    return {
      type: 'postgres',
      host,
      port: Number(port),
      username,
      password,
      database,
      entities: [`./${path}/infra/modules/**/entities/*.{ts,js}`],
      migrations: [`./${path}/infra/config/database/migrations/*.{ts,js}`],
    };
  }
}
