import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from './config/database.config';
import { User } from './entities/user.entity';
import { Role } from './entities/role.entity';
//
@Module({
  imports: [
    TypeOrmModule.forRoot({ ...databaseConfig, autoLoadEntities: true }),
    TypeOrmModule.forFeature([User, Role]),
  ],
  exports: [TypeOrmModule.forFeature([User, Role])],
})
export class DatabaseModule {}
