import { DefaultService } from '@domain/shared/entities/default-service';
import { IHashProvider } from '@domain/shared/providers/hash-provider';
import { IHttpErrorProvider } from '@domain/shared/providers/http-error-provider';
import { User } from '@domain/user/entities/user';
import { UserAlreadyExistsException } from '@domain/user/errors/user-already-exists-exception';
import { IUserRepository } from '@domain/user/repositories/user-repository';
import { CreateUserDto } from '../dtos/create-user-dto';

export class CreateUserUserCase implements DefaultService<CreateUserDto, User> {
  constructor(
    private readonly hashProvider: IHashProvider,
    private readonly userRepository: IUserRepository,
    private readonly httpError: IHttpErrorProvider,
  ) {}

  async execute({ email, name, password }: CreateUserDto): Promise<User> {
    const verifyUser = await this.userRepository.findByEmail(email);

    if (verifyUser) {
      throw new UserAlreadyExistsException(this.httpError);
    }

    const passwordHash = await this.hashProvider.hash(password);

    const user = await this.userRepository.create({
      name,
      email,
      password: passwordHash,
    });

    return user;
  }
}
