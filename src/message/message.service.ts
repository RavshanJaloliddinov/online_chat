import { BadRequestException, HttpServer, Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Message } from './entities/message.entity';
import { measureMemory } from 'vm';
import { Group } from 'src/group/entities/group.entity';
import { User } from 'src/user/models';
import { GroupService } from 'src/group/group.service';
import { firstValueFrom } from 'rxjs';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class MessageService {

  constructor(@InjectModel(Message) private readonly messageModel: typeof Message, private group: GroupService, private readonly httpService: HttpService) { }


  async create(payload: CreateMessageDto) {
    const {chat_id,user_id} = payload
    const foundedChat = await firstValueFrom(this.httpService.get(`http://127.0.0.1:4000/group/${chat_id}`))
    const chatUsers = foundedChat.data.users
    

    chatUsers.forEach(currentUser => {
      if(currentUser.user.id!=user_id){
        throw new BadRequestException("You do not have permission to perform this operation")
      }
    });
    

    
    return this.messageModel.create({
      text: payload.text,
      chat_id: payload.chat_id,
      user_id: payload.user_id,
      image: payload?.image,
      message_type: payload.message_type
    })
  }

  findAll() {
    return this.messageModel.findAll({include: User})
  }

  findOne(id: number) {
    return this.messageModel.findOne()
  }

  update(id: number, payload: UpdateMessageDto) {
    return this.messageModel.update(

      {
        text: payload?.text,
        user_id: payload?.user_id,
        chat_id: payload?.chat_id,
        image: payload?.image
      }, 
      { where: { id } })

  }

  remove(id: number) {
    return this.messageModel.destroy({ where: { id } })
  }
}
