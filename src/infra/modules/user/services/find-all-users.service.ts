import { Inject, Injectable } from '@nestjs/common';
import { FindAllUsersUseCase } from '@application/user/useCases/find-all-users-use-case';
import { UserRepository } from '../repositories/user.repository';
import { USER_REPOSITORY } from '../constants';

@Injectable()
export class FindAllUsersService extends FindAllUsersUseCase {
  constructor(
    @Inject(USER_REPOSITORY)
    userRepository: UserRepository,
  ) {
    super(userRepository);
  }
}
