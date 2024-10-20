import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModule } from './user/user.module';;
import { AuthModule } from './auth/auth.module';
import { ChatModule } from './chat/chat.module';
import { GroupModule } from './group/group.module';
import { UploadModule } from './upload/upload.module';
import { MessageModule } from './message/message.module';
import { Message } from './message/entities/message.entity';
import { User } from './user/models';
import { Group } from './group/entities/group.entity';
import { GroupOfUserModule } from './group_of_user/group_of_user.module';
import { GroupOfUser } from './group_of_user/entities/group_of_user.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { dbConfig } from './config/db.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [dbConfig], // dbConfig ni yuklang
      isGlobal: true, // Globallikni o'rnatish
    }),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => ({
        dialect: 'postgres',
        host: config.get<string>('database.host'),
        port: config.get<number>('database.port'),
        username: config.get<string>('database.user'),
        password: config.get<string>('database.password'),
        database: config.get<string>('database.dbName'),
        models: [User, Group, Message, GroupOfUser],
        synchronize: true,
        logging: console.log,
        autoLoadModels: true,
      }),
      inject: [ConfigService],
    }),
    UserModule,
    ChatModule,
    GroupModule,
    UploadModule,
    MessageModule,
    GroupOfUserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
