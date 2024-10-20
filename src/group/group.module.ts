import { Module } from '@nestjs/common';
import { GroupService } from './group.service';
import { GroupController } from './group.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Group } from './entities/group.entity';
import { UploadService } from 'src/upload/upload.service';
import { AuthModule } from 'src/auth/auth.module'; // Import AuthModule here

@Module({
  imports: [
    SequelizeModule.forFeature([Group]),
    AuthModule,
  ],
  controllers: [GroupController],
  providers: [GroupService],
})
export class GroupModule {}
