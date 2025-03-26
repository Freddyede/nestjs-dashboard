import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import 'dotenv/config';
import { UserRepository } from '../database/repository/user.repository';
import { DatabaseModule } from '../database/database.module';
import { RoleRepository } from '../database/repository/role.repository';
import { APP_GUARD } from '@nestjs/core';
import { CompositeGuard } from '../guards/composite.guard';
import { AccessGuard } from '../guards/access.guard';
import { AuthGuard } from '../guards/auth.guard';

@Module({
  imports: [
    DatabaseModule,
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET as string,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  exports: [
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET as string,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    UserRepository,
    RoleRepository,
    AuthGuard,
    AccessGuard,
    {
      provide: APP_GUARD,
      useClass: CompositeGuard,
    },
  ],
})
export class AuthModule {}
