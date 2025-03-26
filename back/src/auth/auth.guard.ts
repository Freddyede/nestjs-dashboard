import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import 'dotenv/config';
import { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const access: boolean = await this.extractTokenAccessFromHeader(request);
    if (!access) {
      throw new UnauthorizedException();
    } else {
      return true;
    }
  }
  private async extractTokenAccessFromHeader(
    request: Request,
  ): Promise<boolean> {
    const token = await this.jwtService.decode(<string>request.headers.access);
    return token.name === 'Session_SUPER_ADMIN' && token.iat === 1742973806;
  }
}
