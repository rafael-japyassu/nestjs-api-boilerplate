import { UserStatus } from '../enums/user-status';

export class User {
  id: string;

  name: string;

  email: string;

  password: string;

  avatar: string;

  status: UserStatus;

  createdAt: Date;

  updatedAt: Date;
}
