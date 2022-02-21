import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { User } from './entities/user';
import { userProviders } from './providers';
import { UserEntityRepository } from './repositories/user-entity-repository';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserEntityRepository])],
  controllers: [UserController],
  providers: userProviders,
  exports: userProviders,
})
export class UserModule {}
