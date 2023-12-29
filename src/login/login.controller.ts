import { Body, Controller, Post, HttpCode, Get, Req, Res } from '@nestjs/common';
import { LoginService } from './login.service';
import { User, UserData } from 'src/model/user.model';

@Controller()
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post('/login')
  @HttpCode(200)
  login(@Req() request: Request): string {
    return this.loginService.login(request);
  }

  @Post('/register')
  registerSurveySG(@Body() body: UserData): Promise<UserData> {
    return this.loginService.registerSurveySG(body);
  }
  
  @Get('/profile')
  getOneUserData(name): Promise<UserData> {
    return this.loginService.getOneUserData(name);
  }

  @Get('/logout')
  logout(@Req() request: Request, @Res() response): void {
    return this.loginService.logout(request, response);
  }
}
