import { Injectable } from '@nestjs/common';
import { UserData } from 'src/model/user.model';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class LoginService {
  constructor(private usersService: UsersService) {}

  async auth({ password }): Promise<string> {
    const user = await this.usersService.findOne(password);
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
}
