import { HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): { data: string; status: HttpStatus | number } {
    return { data: 'Dashboard@HomeController', status: HttpStatus.OK };
  }
}
