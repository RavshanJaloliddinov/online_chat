import { Injectable } from '@nestjs/common';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Group } from './entities/group.entity';
import { UploadService } from 'src/upload/upload.service';

@Injectable()
export class GroupService {
  #_uploadService: UploadService
  constructor(@InjectModel(Group) private groupModel: typeof Group, upload: UploadService) {
    this.#_uploadService = upload
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
      link: payload.link
    })
  }

  async findAll(): Promise<Group[]> {
    return await this.groupModel.findAll();
  }

  async findOne(id: number): Promise<Group | null> {
    return await this.groupModel.findOne({ where: { id } });
  }

  async update(id: number, payload: UpdateGroupDto): Promise<[number, Group[]]> {

    const image = await this.#_uploadService.uploadFile({
      file: payload.image,
      destination: 'uploads/user',
    })
    payload.image = image.file
    return await this.groupModel.update(payload, { where: { id }, returning: true });
  }

  async remove(id: number): Promise<number> {
    return await this.groupModel.destroy({ where: { id } });
  }
}
