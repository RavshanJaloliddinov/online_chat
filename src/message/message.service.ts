import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Message } from './entities/message.entity';
import { measureMemory } from 'vm';

@Injectable()
export class MessageService {

  constructor(@InjectModel(Message) private readonly messageModel: typeof Message) { }

  create(createMessageDto: CreateMessageDto) {
    return this.messageModel.create({ createMessageDto })
  }

  findAll() {
    return this.messageModel.findAll()
  }

  findOne(id: number) {
    return this.messageModel.findOne()
  }

  update(id: number, updateMessageDto: UpdateMessageDto) {
    return this.messageModel.update({ updateMessageDto }, { where: { id } })
  }

  remove(id: number) {
    return this.messageModel.destroy({ where: { id } })
  }
}
