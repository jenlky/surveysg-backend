import { Injectable } from '@nestjs/common';
import { UserData } from 'src/model/user.model';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class LoginService {
  constructor(private usersService: UsersService) {}

  login(request: any): string {
    const { email, password } = request.body
    const user = this.usersService.findOne(email, password);
    if (user) {
      request.session.isLoggedIn = true
      request.session.email = email
    }
    return user.name
  }

  async registerSurveySG(userData: UserData): Promise<UserData> {
    const result = await this.usersService.saveOneUserData(userData);
    return result
  }

  async getOneUserData(name: string): Promise<UserData> {
    const result = await this.usersService.getOneUserData(name);
    return result
  }

  logout(request: any, response: any): void {
    request.session.destroy((err) => {
      if (err) {
        console.log(err);
      } else {
        response.redirect('/login');
      }
    })
  }
}
