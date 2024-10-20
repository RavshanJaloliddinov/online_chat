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
import { CheckAuthGuard } from './guards/check-auth.guard';
import { APP_GUARD } from '@nestjs/core';
import { GroupOfUserModule } from './group_of_user/group_of_user.module';
import { GroupOfUser } from './group_of_user/entities/group_of_user.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { dbConfig } from './config/db.config';
import { appConfig } from './config/app.config';
import { BASE_URL } from './config/base_url';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [dbConfig, appConfig,BASE_URL],
      isGlobal: true, 

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
        // sync: {force: true},
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
  providers: [
    // {
    //   useClass: CheckAuthGuard,
    //   provide: APP_GUARD
    // }
  ],
})
export class AppModule { }
