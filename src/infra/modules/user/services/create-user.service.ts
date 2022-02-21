import { Inject, Injectable } from '@nestjs/common';
import { CreateUserUserCase } from '@application/user/useCases/create-user-use-case';
import { IHashProvider } from '@domain/shared/providers/hash-provider';
import { IHttpErrorProvider } from '@domain/shared/providers/http-error-provider';
import {
  HASH_PROVIDER,
  HTTP_ERROR_PROVIDER,
} from '@infra/modules/shared/constants';
import { UserRepository } from '../repositories/user.repository';
import { USER_REPOSITORY } from '../constants';

@Injectable()
export class CreateUserService extends CreateUserUserCase {
  constructor(
    @Inject(HASH_PROVIDER)
    hashProvider: IHashProvider,
    @Inject(USER_REPOSITORY)
    userRepository: UserRepository,
    @Inject(HTTP_ERROR_PROVIDER)
    httpErrorProvider: IHttpErrorProvider,
  ) {
    super(hashProvider, userRepository, httpErrorProvider);
  }
}
