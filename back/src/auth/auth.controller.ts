import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserLoginDto } from './userLogin.dto';

@Controller('dashboard/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('login')
  login(@Body() user: UserLoginDto) {
    return this.authService.login(user);
  }
}
