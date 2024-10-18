import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/user/user.module';
import { User } from 'src/user/models';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserService } from 'src/user/user.service';


@Module({
  imports: [SequelizeModule.forFeature([User])],
  controllers: [AuthController],
  providers: [AuthService,UserService],
})
export class AuthModule {}
