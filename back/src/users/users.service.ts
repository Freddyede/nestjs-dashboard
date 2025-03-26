import { HttpStatus, Injectable, Param, Req } from '@nestjs/common';
import { UserRepository } from '../database/repository/user.repository';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userRepository: UserRepository,
  ) {}

  private async getUserConnected(req: Request): Promise<any> {
    return await this.jwtService.verifyAsync(
      req.headers['authorization'].split(' ')[1],
    );
  }

  async getAll(@Req() req: Request) {
    const user: any = await this.getUserConnected(req);
    return {
      data: await this.userRepository.findAllExceptEmail(user.email),
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
