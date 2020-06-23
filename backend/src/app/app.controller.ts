import { Controller, UseGuards, Request, Post, Get } from '@nestjs/common';
import { LocalAuthGuard } from 'src/auth/guards/local-auth.guard';
import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post("auth/login")
  async login(@Request() req) {
    let response;
    try {
     response = await this.authService.login(req.user);
   } catch (err) {
      return {
        "statusCode": 400,
        "message": err
      }
   }
    return {
      "statusCode": 200,
      "message": response
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get("profile")
  getProfile(@Request() req) {
    return req.user;
  }
}