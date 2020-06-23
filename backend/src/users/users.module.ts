import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UserSubscriber } from './UserSubscriber';


@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [UsersService, UserSubscriber],
  controllers: [UsersController],
  exports: [UsersService]
})
export class UsersModule {}
