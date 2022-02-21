import { DefaultService } from '@domain/shared/entities/default-service';
import { User } from '@domain/user/entities/user';
import { IUserRepository } from '@domain/user/repositories/user-repository';

export class FindAllUsersUseCase implements DefaultService<unknown, User[]> {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(): Promise<User[]> {
    return this.userRepository.findAll();
  }
}
