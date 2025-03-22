import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import 'dotenv/config';
import { UserRepository } from '../database/repository/user.repository';
import { DatabaseModule } from '../database/database.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth.guard';

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
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AuthModule {}
