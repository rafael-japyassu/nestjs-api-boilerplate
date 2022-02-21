import { EntityRepository, Repository } from 'typeorm';
import { User } from '../entities/user';

@EntityRepository(User)
export class UserEntityRepository extends Repository<User> {}
