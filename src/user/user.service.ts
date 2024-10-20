import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './models';
import { CreateUserRequest, UpdateUserRequest } from './interfaces';
import { GroupOfUser } from 'src/group_of_user/entities/group_of_user.entity';
import { Group } from 'src/group/entities/group.entity';

@Injectable()
export class UserService {

  constructor(@InjectModel(User) private readonly userModel: typeof User) { }


  async create(payload: CreateUserRequest): Promise<void> {
    await this.userModel.create({
      full_name: payload.full_name,
      image: payload?.image,
      email: payload.email,
      password: payload.password,
    })
  }

  async findAll(): Promise<User[]> {
    return await this.userModel.findAll()
  }

  async findOne(id: number): Promise<User> {
    return await this.userModel.findOne({ where: { id }, include: [{model: GroupOfUser, include: [Group]}] })
  }

  async update(id: number, payload: UpdateUserRequest): Promise<void> {
    await this.userModel.update(
      {
        full_name: payload?.full_name,
        image: payload?.image,
        email: payload?.email,
        password: payload?.password,
        status: payload?.status,
      },
      { where: { id } },)
  }

  async remove(id: number): Promise<void> {
    await this.userModel.destroy({ where: { id } })
  }
}
