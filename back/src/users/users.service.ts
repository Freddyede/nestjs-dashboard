import { HttpStatus, Injectable, Req } from '@nestjs/common';
import { UserRepository } from '../database/repository/user.repository';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository) {}

  async getAll(@Req() req: Request) {
    return {
      data: await this.userRepository.findAllExceptEmail(req['user'].email),
      status: HttpStatus.OK,
    };
  }
}
