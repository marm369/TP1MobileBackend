import { Controller, Post, Body } from '@nestjs/common';
import { AuthentService } from './authent.service';

@Controller('authent')
export class AuthentController {
    constructor(private readonly authentService: AuthentService) {}

    @Post('/adduser')
    addUser(@Body() body: { username: string; password: string }): string {
        const { username, password } = body;
        return this.authentService.addUser(username, password);
    }

     @Post('/login')
        login(@Body() body: { username: string; password: string }): string {
            const { username, password } = body;
            return this.authentService.findUser(username, password);
        }
}