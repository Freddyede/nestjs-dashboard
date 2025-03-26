import { Controller, Delete, Get, Param, Req } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get('list')
  public async all(@Req() req: Request) {
    return this.usersService.getAll(req);
  }
  @Get('list/:id')
  public async one(@Param('id') id: number) {
    return this.usersService.getOne(id);
  }
  @Delete(':id')
  public async delete(@Param('id') id: number) {
    return this.usersService.deleteOne(id);
  }
}
