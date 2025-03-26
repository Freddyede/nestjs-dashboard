import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesDto } from './roles.dto';

@Controller('dashboard/roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}
  @Get()
  async getAll() {
    return this.rolesService.getAll();
  }
  @Post('add')
  addRoles(@Body() role: RolesDto) {
    return this.rolesService.add(role);
  }
  @Delete(':id')
  public async delete(@Param('id') id: number) {
    return this.rolesService.deleteOne(id);
  }
}
