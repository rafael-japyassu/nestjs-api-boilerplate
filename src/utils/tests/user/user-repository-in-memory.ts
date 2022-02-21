import { randomUUID } from 'crypto';
import { User } from '@domain/user/entities/user';
import { IUserRepository } from '@domain/user/repositories/user-repository';
import { CreateUser } from '@domain/user/types/create-user';

export class UserRepositoryInMemory implements IUserRepository {
  users: User[];

  constructor() {
    this.users = [];
  }

  async findAll(): Promise<User[]> {
    return this.users;
  }

  async findByEmail(email: string): Promise<User | undefined> {
    return this.users.find(user => user.email === email);
  }

  async create({ email, name, password }: CreateUser): Promise<User> {
    const user = new User();
    Object.assign(user, {
      id: randomUUID(),
      name,
      email,
      password,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    this.users.push(user);

    return user;
  }

  async update(user: User): Promise<User> {
    const userIndex = this.users.findIndex(userFind => userFind.id === user.id);

    this.users[userIndex] = user;

    return user;
  }
}
