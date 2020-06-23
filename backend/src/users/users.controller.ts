import { Controller, Post, Body } from '@nestjs/common';
import { IUserDTO } from "./dto/user.dto";
import { UsersService } from './users.service';

@Controller()
export class UsersController {
  constructor(private usersService: UsersService) {}
  
  @Post("/signup")
  createUser(@Body() data: IUserDTO){
    return this.usersService.create(data);
  }
}
