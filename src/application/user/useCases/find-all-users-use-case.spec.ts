import { HashProviderInMemory } from '@utils/tests/shared/hash-provider-in-memory';
import { HttpErrorProviderInMemory } from '@utils/tests/shared/http-error-provider-in-memory';
import { UserRepositoryInMemory } from '@utils/tests/user/user-repository-in-memory';
import { CreateUserUserCase } from './create-user-use-case';
import { FindAllUsersUseCase } from './find-all-users-use-case';

describe('FindAllUsersUseCase', () => {
  let userRepositoryInMemory: UserRepositoryInMemory;
  let hashProviderInMemory: HashProviderInMemory;
  let httpErrorProviderInMemory: HttpErrorProviderInMemory;
  let createUserService: CreateUserUserCase;
  let findAllUsers: FindAllUsersUseCase;

  beforeEach(() => {
    userRepositoryInMemory = new UserRepositoryInMemory();
    hashProviderInMemory = new HashProviderInMemory();
    httpErrorProviderInMemory = new HttpErrorProviderInMemory();
    createUserService = new CreateUserUserCase(
      hashProviderInMemory,
      userRepositoryInMemory,
      httpErrorProviderInMemory,
    );
    findAllUsers = new FindAllUsersUseCase(userRepositoryInMemory);
  });

  it('should be able to list a users createds', async () => {
    const user1 = await createUserService.execute({
      name: 'Fulano da Silva',
      email: 'fulano.silva@email.com',
      password: '123123',
    });
    const user2 = await createUserService.execute({
      name: 'Sicrano',
      email: 'secrano@email.com',
      password: '123123',
    });

    const users = await findAllUsers.execute();

    expect(users).toEqual([user1, user2]);
  });
});
