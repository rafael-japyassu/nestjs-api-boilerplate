import { HashProviderInMemory } from '@utils/tests/shared/hash-provider-in-memory';
import { HttpErrorProviderInMemory } from '@utils/tests/shared/http-error-provider-in-memory';
import { UserRepositoryInMemory } from '@utils/tests/user/user-repository-in-memory';
import { CreateUserUserCase } from './create-user-use-case';

describe('CreateUserUserCase', () => {
  let userRepositoryInMemory: UserRepositoryInMemory;
  let hashProviderInMemory: HashProviderInMemory;
  let httpErrorProviderInMemory: HttpErrorProviderInMemory;
  let createUserService: CreateUserUserCase;

  beforeEach(() => {
    userRepositoryInMemory = new UserRepositoryInMemory();
    hashProviderInMemory = new HashProviderInMemory();
    httpErrorProviderInMemory = new HttpErrorProviderInMemory();
    createUserService = new CreateUserUserCase(
      hashProviderInMemory,
      userRepositoryInMemory,
      httpErrorProviderInMemory,
    );
  });

  it('should be able to create a new User', async () => {
    const user = await createUserService.execute({
      name: 'Fulano da Silva',
      email: 'fulano.silva@email.com',
      password: '123123',
    });

    expect(user).toHaveProperty('id');
  });

  it('should be able to create a new user and encrypt their password', async () => {
    const user = await createUserService.execute({
      name: 'Fulano da Silva',
      email: 'fulano.silva@email.com',
      password: '123123',
    });

    expect(user.password).not.toBe('123123');
  });

  it('should not be able to create a new user with the repeated email', async () => {
    await createUserService.execute({
      name: 'Fulano da Silva',
      email: 'fulano.silva@email.com',
      password: '123123',
    });

    await expect(
      createUserService.execute({
        name: 'Fulano da Silva 2',
        email: 'fulano.silva@email.com',
        password: '123123',
      }),
    ).rejects.toBeInstanceOf(Error);
  });
});
