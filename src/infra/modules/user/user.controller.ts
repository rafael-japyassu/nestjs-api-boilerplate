import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Inject,
  Injectable,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { CREATE_USER_SERVICE, FIND_ALL_USERS_SERVICE } from './constants';
import { CreateUserDto } from './dtos/create-user.dto';
import { User } from './entities/user';
import { CreateUserService } from './services/create-user.service';
import { FindAllUsersService } from './services/find-all-users.service';

@Controller('users')
@Injectable()
@UseInterceptors(ClassSerializerInterceptor)
export class UserController {
  constructor(
    @Inject(CREATE_USER_SERVICE)
    private readonly createUser: CreateUserService,
    @Inject(FIND_ALL_USERS_SERVICE)
    private readonly findAllUsers: FindAllUsersService,
  ) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll() {
    const users = await this.findAllUsers.execute();
    return users;
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() userDto: CreateUserDto): Promise<User> {
    const user = await this.createUser.execute(userDto);
    return user;
  }
}
