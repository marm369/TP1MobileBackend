import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

 postLogin(username: string): string {
     return `Welcome, ${username}!`;
 }
}
