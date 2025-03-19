import { Repository } from 'typeorm';
import { Role } from '../entities/role.entity';
import { InjectRepository } from '@nestjs/typeorm';

export class RoleRepository extends Repository<Role> {
  @InjectRepository(Role) private readonly roleRepository: Repository<Role>;
}
