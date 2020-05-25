import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from "@nestjs/config";
import { UsersModule } from './users/users.module';
import { Connection } from 'typeorm';
import { databaseConfig } from './configs/config';
import { DatabaseConfig } from './configs/database.config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: DatabaseConfig
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig]
    }),
    UsersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(private connection: Connection) {}
}

