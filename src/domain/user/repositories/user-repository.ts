import { User } from '../entities/user';
import { CreateUser } from '../types/create-user';

export interface IUserRepository {
  findAll(): Promise<User[]>;
  findByEmail(email: string): Promise<User | undefined>;
  create(data: CreateUser): Promise<User>;
  update(user: User): Promise<User>;
}
