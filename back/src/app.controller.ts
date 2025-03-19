import { Controller, Get, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('dashboard')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): { data: string; status: HttpStatus | number } {
    return this.appService.getHello();
  }
}
