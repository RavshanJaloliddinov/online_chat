import { Injectable } from '@nestjs/common';
import { CreateGroupOfUserDto } from './dto/create-group_of_user.dto';
import { UpdateGroupOfUserDto } from './dto/update-group_of_user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { GroupOfUser } from './entities/group_of_user.entity';

@Injectable()
export class GroupOfUserService {
  constructor(@InjectModel(GroupOfUser) private readonly groupOfUserModel: typeof GroupOfUser) {

  }
  create(payload: CreateGroupOfUserDto) {
    return this.groupOfUserModel.create({
      user_id: payload.user_id,
      group_id: payload.group_id,
      is_admin: false
    })
  }

  findAll() {
    return this.groupOfUserModel.findAll()
  }

  findOne(id: number) {
    return this.groupOfUserModel.findOne({ where: { id } })
  }

  update(id: number, payload: UpdateGroupOfUserDto) {
    return this.groupOfUserModel.update(
      {
        user_id: payload?.user_id,
        group_id: payload?.group_id,
        is_admin: false
      }, { where: { id } }
    )
  }

  remove(id: number) {
    return this.groupOfUserModel.destroy({ where: { id } })
  }
}
