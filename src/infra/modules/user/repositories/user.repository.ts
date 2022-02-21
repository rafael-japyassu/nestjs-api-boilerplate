import { User } from '@domain/user/entities/user';
import { IUserRepository } from '@domain/user/repositories/user-repository';
import { CreateUser } from '@domain/user/types/create-user';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntityRepository } from './user-entity-repository';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(
    @InjectRepository(UserEntityRepository)
    private readonly userRepository: UserEntityRepository,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findByEmail(email: string): Promise<User> {
    return this.userRepository.findOne({ where: { email } });
  }

  async create({ email, name, password }: CreateUser): Promise<User> {
    const user = this.userRepository.create({ email, name, password });

    await this.userRepository.save(user);

    return user;
  }

  async update(user: User): Promise<User> {
    return this.userRepository.save(user);
  }
}
