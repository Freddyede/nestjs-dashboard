import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AccessModule } from './access/access.module';
import { RolesModule } from './roles/roles.module';

@Module({
  imports: [DatabaseModule, AuthModule, UsersModule, AccessModule, RolesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
