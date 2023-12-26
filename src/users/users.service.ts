import { Injectable } from '@nestjs/common';
import { User } from 'src/model/user.model';

@Injectable()
export class UsersService {
  private readonly users = [
    {
      name: 'John Cena',
      email: 'john@go.gov.sg',
      password: 'johncena',
    },
    {
      name: 'Maria',
      email: 'maria@go.gov.sg',
      password: 'mariagonzales',
    },
  ];

  async findOne(password: string): Promise<User | undefined> {
    return this.users.find(user => user.password === password);
  }
}