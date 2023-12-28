import { Body, Controller, Post, HttpCode } from '@nestjs/common';
import { LoginService } from './login.service';
import { User, UserData } from 'src/model/user.model';

@Controller()
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post('/auth')
  @HttpCode(200)
  auth(@Body() body: User): Promise<string> {
    return this.loginService.auth(body);
  }

  @Post('/register')
  registerSurveySG(@Body() body: UserData): Promise<UserData> {
    return this.loginService.register(body);
  }
}
