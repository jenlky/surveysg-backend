import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class LoginService {
  constructor(private usersService: UsersService) {}

  async auth({ password }): Promise<string> {
    const user = await this.usersService.findOne(password);
    return user.name
  }
}
