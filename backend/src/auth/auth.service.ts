import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
    ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(email);
    if (user && user.password === pass) {
      const { password, ...result} = user;
      return result;
    }
    return null;
  }

  login(user: any): Promise<any> {
    const payload = { username: user.email, sub: user.id };
    return Promise.resolve({ access_token: this.jwtService.sign(payload) });
  }
}
