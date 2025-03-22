import {
  Body,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserRepository } from '../database/repository/user.repository';
import { compareSync, genSalt, hash } from 'bcrypt';
import { User } from '../database/entities/user.entity';
import { UserRegisterDto } from './userLogin.dto';
import { RoleRepository } from '../database/repository/role.repository';
@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userRepository: UserRepository,
    private readonly roleRepository: RoleRepository,
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

  async register(@Body() user: UserRegisterDto) {
    const salt: string = await genSalt(10);
    const userDatabase: User = this.userRepository.create(user);
    userDatabase.password = await hash(userDatabase.password, salt);
    userDatabase.roles = await this.roleRepository.findOneByOrFail({
      name: user.roleName,
    });
    userDatabase.createdAt = new Date();
    userDatabase.deletedAt = null;
    await this.userRepository.save(userDatabase);
    return {
      status: HttpStatus.CREATED,
      message: 'User registered successfully!',
    };
  }
}
