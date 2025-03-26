import { HttpStatus } from '@nestjs/common';
import { User } from '../database/entities/user.entity';

export interface IAuthLogin {
  data: {
    user: User;
    token: string;
  };
  status: HttpStatus;
}

export interface IAuthRegister {
  status: HttpStatus;
  message: string;
}
