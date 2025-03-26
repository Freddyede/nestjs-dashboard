import { HttpStatus, Injectable, Param, Req } from '@nestjs/common';
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
  async getOne(@Param('id') id: number) {
    return {
      data: await this.userRepository.findOneOrFail({
        relations: ['roles'],
        where: { id },
        select: {
          roles: {
            id: true,
            name: true,
            createdAt: true,
            updatedAt: true,
            deletedAt: true,
            access_token: false,
          },
        },
      }),
      status: HttpStatus.OK,
    };
  }
  async deleteOne(@Param('id') id: number) {
    await this.userRepository.delete(id);
    return {
      status: HttpStatus.NO_CONTENT,
      message: 'User deleted successfully.',
    };
  }
}
