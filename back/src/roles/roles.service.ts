import { HttpStatus, Injectable, Param } from '@nestjs/common';
import { RoleRepository } from '../database/repository/role.repository';
import { RolesDto } from './roles.dto';

@Injectable()
export class RolesService {
  constructor(private readonly roleRepository: RoleRepository) {}
  async getAll() {
    return {
      data: await this.roleRepository.find(),
      status: HttpStatus.OK,
    };
  }

  async getOne(@Param('id') id: number) {
    return {
      data: await this.roleRepository.findOneByOrFail({ id }),
      status: HttpStatus.OK,
    };
  }

  async add(role: RolesDto) {
    await this.roleRepository.save(role);
    return {
      message: 'Role added successfully.',
      status: HttpStatus.CREATED,
    };
  }

  async deleteOne(@Param('id') id: number) {
    await this.roleRepository.delete(id);
    return {
      status: HttpStatus.NO_CONTENT,
      message: 'Role deleted successfully.',
    };
  }
}
