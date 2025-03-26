import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { DatabaseModule } from '../database/database.module';
import { UserRepository } from '../database/repository/user.repository';
import { APP_GUARD } from '@nestjs/core';
import { AccessGuard } from '../guards/access.guard';
import { AuthGuard } from '../guards/auth.guard';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [
    UsersService,
    UserRepository,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: AccessGuard,
    },
  ],
})
export class UsersModule {}
