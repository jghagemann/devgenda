import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { IUserDTO } from './dto/user.dto';
import { Repository, Connection } from 'typeorm';


@Injectable()
export class UsersService {  
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
    private connection: Connection,
  ) {}

    async create(data: IUserDTO) {
    const newUser = this.usersRepository.create(data);
    await this.usersRepository.save(newUser);
    return newUser;
  }

  findAll(): Promise<UserEntity[]> {
    return this.usersRepository.find();
  }

  async findOne(email: string): Promise<UserEntity | undefined> {
    return this.usersRepository.findOne({ where: {email}});
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }

}
