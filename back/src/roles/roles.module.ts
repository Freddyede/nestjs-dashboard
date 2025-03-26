import { Module } from '@nestjs/common';
import { RolesController } from './roles.controller';
import { RolesService } from './roles.service';
import { DatabaseModule } from '../database/database.module';
import { RoleRepository } from '../database/repository/role.repository';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from '../guards/auth.guard';
import { AccessGuard } from '../guards/access.guard';

@Module({
  imports: [DatabaseModule],
  controllers: [RolesController],
  providers: [
    RolesService,
    RoleRepository,
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
export class RolesModule {}
