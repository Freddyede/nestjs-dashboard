import { Repository } from 'typeorm';
import { Role } from '../entities/role.entity';
import { InjectRepository } from '@nestjs/typeorm';

export class RoleRepository extends Repository<Role> {
  constructor(@InjectRepository(Role) public roleRepository: Repository<Role>) {
    super(
      roleRepository.target,
      roleRepository.manager,
      roleRepository.queryRunner,
    );
  }
}
