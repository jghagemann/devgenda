import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/user.entity';
import { IUserDTO } from 'src/users/dto/user.dto';

@Injectable()
export class SignupService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ){}

  async create(data: IUserDTO) {
    const newUser = this.userRepository.create(data);
    await this.userRepository.save(newUser);
    return newUser;
  }
}
