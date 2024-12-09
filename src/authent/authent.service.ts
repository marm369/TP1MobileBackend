import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthentService {
    private users: { username: string; password: string }[] = [];

    addUser(username: string, password: string): string {
        this.users.push({ username, password });
        console.log(this.users);
        return 'User added successfully';
    }

      findUser(username: string, password: string): string {
            const user = this.users.find(user => user.username === username && user.password === password);
            return user ? `Welcome, ${user.username}!` : 'Invalid credentials';
        }
}