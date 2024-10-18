import { Module } from '@nestjs/common';
import { ChatController } from './chat.controller';
import { UserService } from 'src/user/user.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/user/models';


@Module({
  imports: [SequelizeModule.forFeature([User])],
  providers: [ChatController, UserService],
})
export class ChatModule { }
