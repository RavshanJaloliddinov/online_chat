import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Message } from './entities/message.entity';
import { measureMemory } from 'vm';
import { Group } from 'src/group/entities/group.entity';

@Injectable()
export class MessageService {

  constructor(@InjectModel(Message) private readonly messageModel: typeof Message) { }

  create(payload: CreateMessageDto) {
    return this.messageModel.create({
      message_type: payload?.message_type,
      text: payload.text,
      chat_id: payload.chat_id,
      user_id: payload.user_id,
      image: payload?.image
    })
  }

  findAll() {
    return this.messageModel.findAll()
  }

  findOne(id: number) {
    return this.messageModel.findOne()
  }

  update(id: number, payload: UpdateMessageDto) {
    return this.messageModel.update(

      {
        message_type: payload?.message_type,
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
