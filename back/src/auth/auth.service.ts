import { Body, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserRepository } from '../database/repository/user.repository';
import { compareSync } from 'bcrypt';
import { User } from '../database/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userRepository: UserRepository,
  ) {}

  async login(@Body() user: { email: string; password: string }) {
    const userDatabase: User = await this.userRepository.findByEmail(
      user.email,
    );
    if (compareSync(user.password, userDatabase.password)) {
      return {
        data: {
          user: userDatabase,
          token: this.jwtService.sign({ ...userDatabase }),
        },
      };
    } else {
      throw new UnauthorizedException('Bad Email/Password');
    }
  }
}
