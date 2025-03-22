import { Controller, Get, Req } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get('list')
  public async all(@Req() req: Request) {
    return this.usersService.getAll(req);
  }
}
