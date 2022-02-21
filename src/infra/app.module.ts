import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SharedModule } from './modules/shared/shared.module';
import { configEnvironments } from './config/envs';
import { UserModule } from './modules/user/user.module';
import { DatabaseConfig } from './config/database';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configEnvironments],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: DatabaseConfig,
    }),
    SharedModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
