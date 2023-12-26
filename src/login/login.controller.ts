import { Body, Controller, Post } from '@nestjs/common';
import { LoginService } from './login.service';
import { User } from 'src/model/user.model';

@Controller()
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post('/auth')
  auth(@Body() body: User): Promise<User> {
    return this.loginService.auth(body);
  }
}
