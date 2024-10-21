import { Module } from '@nestjs/common';
import { SocketGateway } from './chat.controller';
import { UserService } from 'src/user/user.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/user/models';


@Module({
  imports: [SequelizeModule.forFeature([User])],
  providers: [SocketGateway, UserService],
})
export class ChatModule { }
