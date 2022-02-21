import { Provider } from '@nestjs/common';
import {
  CREATE_USER_SERVICE,
  FIND_ALL_USERS_SERVICE,
  USER_REPOSITORY,
} from '../constants';
import { UserRepository } from '../repositories/user.repository';
import { CreateUserService } from '../services/create-user.service';
import { FindAllUsersService } from '../services/find-all-users.service';

export const userProviders: Provider[] = [
  {
    provide: USER_REPOSITORY,
    useClass: UserRepository,
  },
  {
    provide: CREATE_USER_SERVICE,
    useClass: CreateUserService,
  },
  {
    provide: FIND_ALL_USERS_SERVICE,
    useClass: FindAllUsersService,
  },
];
