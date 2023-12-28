import { Body, Controller, Post, HttpCode, Get } from '@nestjs/common';
import { LoginService } from './login.service';
import { User, UserData } from 'src/model/user.model';

@Controller()
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post('/login')
  @HttpCode(200)
  login(@Body() body: User): Promise<string> {
    return this.loginService.login(body);
  }

  @Post('/register')
  registerSurveySG(@Body() body: UserData): Promise<UserData> {
    return this.loginService.registerSurveySG(body);
  }
  
  @Get('/profile')
  getOneUserData(name): Promise<UserData> {
    return this.loginService.getOneUserData(name);
  }
}
