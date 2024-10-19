import { Module } from '@nestjs/common';
import { GroupService } from './group.service';
import { GroupController } from './group.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Group } from './entities/group.entity';
import { UploadService } from 'src/upload/upload.service';

@Module({
  controllers: [GroupController],
  providers: [GroupService, UploadService],
  imports: [
    SequelizeModule.forFeature([Group])],

})
export class GroupModule { }
