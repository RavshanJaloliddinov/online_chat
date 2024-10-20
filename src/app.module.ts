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

@Module({
  imports: [SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DB_HOST,
      port: 5432,
      username: "postgres",
      password: "1111",
      database: process.env.DB_NAME,
      autoLoadModels: true, 
      synchronize: true,
      // sync: {force: true}
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
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
