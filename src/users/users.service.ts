import { ForbiddenException, Injectable } from '@nestjs/common';
import { User, UserData } from 'src/model/user.model';

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      name: 'John Cena',
      email: 'john@go.gov.sg',
      password: 'johncena',
    },
    {
      name: 'Maria Gonzales',
      email: 'maria@go.gov.sg',
      password: 'mariagonzales',
    },
  ];

  private readonly userData: UserData[] = [
    {
      name: 'John Cena',
      email: 'johncena@gmail.com',
      agency: 'Central Provident Fund',
      jobDescription: 'Easy job',
      termsOfUse: true
    },
    {
      name: 'Maria Gonzales',
      email: 'mariagonzales@gmail.com',
      agency: 'ACRA',
      jobDescription: 'Difficult',
      termsOfUse: true
    },
  ]

  async findOne(password: string): Promise<User | undefined> {
    const user = this.users.find(user => user.password === password);
    if (!user) {
      throw new ForbiddenException('User is unauthorised');
    }
    return user
  }

  async saveOneUserData(userData: UserData): Promise<UserData | undefined> {
    this.userData.push(userData)
    return userData
  }

  async getOneUserData(name: string): Promise<UserData | undefined> {
    const user = this.userData.find(user => user.name === name);
    return user
  }
}