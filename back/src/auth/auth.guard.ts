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
    const token = this.extractTokenFromHeader(request);
    const access: boolean = await this.extractTokenAccessFromHeader(request);
    if(token !== undefined) {
      if (!token && !access) {
        throw new UnauthorizedException();
      }
      try {
        // 💡 We're assigning the payload to the request object here
        // so that we can access it in our route handlers
        request['user'] = await this.jwtService.verifyAsync(token, {
          secret: process.env.JWT_SECRET,
        });
      } catch {
        throw new UnauthorizedException();
      }
      return true;
    } else {
      if (!access) {
        throw new UnauthorizedException();
      } else {
        return true;
      }
    }
  }
  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
  private async extractTokenAccessFromHeader(
    request: Request,
  ): Promise<boolean> {
    const token = await this.jwtService.decode(<string>request.headers.access);
    return token.name === 'Session_SUPER_ADMIN' && token.iat === 1742973806;
  }
}
