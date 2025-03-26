import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { AuthGuard } from './auth.guard';
import { AccessGuard } from './access.guard';

@Injectable()
export class CompositeGuard implements CanActivate {
  constructor(
    private authGuard: AuthGuard,
    private accessGuard: AccessGuard,
  ) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const hasAccess = await this.accessGuard.canActivate(context);
    if (!hasAccess) {
      throw new UnauthorizedException();
    }
    const isAuthenticated = await this.authGuard.canActivate(context);
    if (!isAuthenticated) {
      throw new UnauthorizedException();
    }
    return true;
  }
}
