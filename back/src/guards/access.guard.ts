import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';
import 'dotenv/config';

@Injectable()
export class AccessGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const hasAccess = await this.extractTokenAccessFromHeader(request);
    if (!hasAccess) {
      throw new UnauthorizedException();
    }
    console.log(hasAccess);
    return true;
  }
  private async extractTokenAccessFromHeader(
    request: Request,
  ): Promise<boolean> {
    const access = <string>request.headers['access'];
    console.log(access);
    if (!access) {
      throw new UnauthorizedException();
    }
    const decodedToken = await this.jwtService.decode(access);
    console.log('decodedToken', decodedToken);
    return (
      decodedToken.name === process.env.TOKEN_NAME &&
      decodedToken.iat === +process.env.TOKEN_IAT
    );
  }
}
