import { Body, Controller, Post } from '@nestjs/common';
import { LoginService } from './login.service';

@Controller()
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post('/auth')
  auth(@Body() body): string {
    console.log('body', body)
    return this.loginService.auth();
  }
}
