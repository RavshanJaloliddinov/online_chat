import { Module } from '@nestjs/common';
import { GroupOfUserService } from './group_of_user.service';
import { GroupOfUserController } from './group_of_user.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { GroupOfUser } from './entities/group_of_user.entity';

@Module({
  controllers: [GroupOfUserController],
  providers: [GroupOfUserService],
  imports: [SequelizeModule.forFeature([GroupOfUser])]
})
export class GroupOfUserModule {}
