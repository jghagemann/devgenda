import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from "@nestjs/config";
import { UsersModule } from './users/users.module';
import { databaseConfig } from './configs/config';
import { DatabaseConfig } from './configs/database.config';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app/app.controller';
import { ConfigService } from '@nestjs/config';

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
    UsersModule,
    AuthModule,
    ConfigModule
  ],
  controllers: [AppController],
  providers: [ConfigService],
  exports: [ConfigModule]
})
export class AppModule {}