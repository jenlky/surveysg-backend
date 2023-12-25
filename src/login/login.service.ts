import { Injectable } from '@nestjs/common';

@Injectable()
export class LoginService {
  auth(): string {
    return 'Hello World!';
  }
}
