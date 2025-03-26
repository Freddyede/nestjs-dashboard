import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { DatabaseModule } from '../database/database.module';
import { UserRepository } from '../database/repository/user.repository';
import { APP_GUARD } from '@nestjs/core';
import { CompositeGuard } from '../guards/composite.guard';
import { AccessGuard } from '../guards/access.guard';
import { AuthGuard } from '../guards/auth.guard';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [
    UsersService,
    UserRepository,
    AuthGuard,
    AccessGuard,
    {
      provide: APP_GUARD,
      useClass: CompositeGuard,
    },
  ],
})
export class UsersModule {}
