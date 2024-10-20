import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModule } from './user/user.module';
import { ClientModule } from './client/client.module';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { ChatModule } from './chat/chat.module';
import { GroupModule } from './group/group.module';
import { UploadModule } from './upload/upload.module';
import { MessageModule } from './message/message.module';
import { Message } from './message/entities/message.entity';
import { User } from './user/models';
import { Group } from './group/entities/group.entity';
import { GroupOfUserModule } from './group_of_user/group_of_user.module';

@Module({
  imports: [SequelizeModule.forRoot({
      dialect: 'postgres',
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "1111",
      database: "chat",
      autoLoadModels: true, 
      synchronize: true,
      // sync: {force: true},
      models: [User, Message, Group]
    }),
    JwtModule.register({
      secret: 'my secret',
      global: true,
      signOptions: {
        expiresIn: 60 * 15,
      },
    }),
    UserModule,
    ClientModule,
    AuthModule,
    ChatModule,
    GroupModule,
    UploadModule,
    MessageModule,
    GroupOfUserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
