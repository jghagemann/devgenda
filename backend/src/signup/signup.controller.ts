import { Controller, Post, Body } from '@nestjs/common';
import { SignupService } from './signup.service';
import { IUserDTO } from 'src/users/dto/user.dto';

@Controller('signup')
export class SignupController {
  constructor(private signupService: SignupService) {}
  
  @Post()
  createUser(@Body() data: IUserDTO){
    return this.signupService.create(data);
  }
}
