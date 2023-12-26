import { Injectable } from '@nestjs/common';
import { User } from 'src/model/user.model';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class LoginService {
  constructor(private usersService: UsersService) {}

  async auth({ email, password }): Promise<User> {
    return await this.usersService.findOne(password);
  }
}
