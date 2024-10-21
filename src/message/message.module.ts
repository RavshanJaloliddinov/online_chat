import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageController } from './message.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Message } from './entities/message.entity';
import { GroupService } from 'src/group/group.service';
import { UploadService } from 'src/upload/upload.service';
import { Group } from 'src/group/entities/group.entity';
import { GroupModule } from 'src/group/group.module';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [SequelizeModule.forFeature([Message,Group]),HttpModule,ConfigModule],
  controllers: [MessageController],
  providers: [MessageService,GroupService],
})
export class MessageModule {}
