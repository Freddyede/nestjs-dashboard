import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AccessGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const access: boolean = await this.extractTokenAccessFromHeader(request);
    if (!access) {
      throw new UnauthorizedException();
    }
    return true;
  }
  private async extractTokenAccessFromHeader(
    request: Request,
  ): Promise<boolean> {
    const token = await this.jwtService.decode(
      <string>request.headers['access'],
    );
    return token.name === 'Session_SUPER_ADMIN' && token.iat === 1742973806;
  }
}
