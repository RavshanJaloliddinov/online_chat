import { Injectable } from '@nestjs/common';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Group } from './entities/group.entity';
import { Message } from 'src/message/entities/message.entity';
import { User } from 'src/user/models';
import { GroupOfUser } from 'src/group_of_user/entities/group_of_user.entity';
import { GroupOfUserService } from 'src/group_of_user/group_of_user.service';


@Injectable()
export class GroupService {
  
  constructor(@InjectModel(Group) private groupModel: typeof Group) {
    
  }

  async create(payload: CreateGroupDto): Promise<void> {

  //   console.log(payload)
  //   const image = await this.#_uploadService.uploadFile({
  //     file: payload.image,
  //     destination: 'uploads/user',
  //   });
  //  payload.image = image.file;
   
    
    await this.groupModel.create({
      name: payload.name,
      image: "image.jpg",
      description: payload.description,
      link: payload.link,
      group_admin: payload.group_admin
    })
   
  }

  async findAll(): Promise<Group[]> {
    return await this.groupModel.findAll();
  }

  async findOne(id: number): Promise<Group | null> {
    return await this.groupModel.findOne({ where: { id }, include: [{model: Message, include: [User]},{model: GroupOfUser, include: [User]}] });
  }

  async update(id: number, payload: UpdateGroupDto): Promise<[number, Group[]]> {

    // const image = await this.#_uploadService.uploadFile({
    //   file: payload.image,
    //   destination: 'uploads/user',
    // })
    // payload.image = image.file
    return await this.groupModel.update(payload, { where: { id }, returning: true });
  }

  async remove(id: number): Promise<number> {
    return await this.groupModel.destroy({ where: { id } });
  }
}
