import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';



async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);


  app.enableCors({
    origin: "*",
    methods: "*"
  });


  const config = new DocumentBuilder()
    .setTitle("microservice")
    .setDescription('API for microservice')
    .setVersion('1.0')
    .addTag('microservice')
    .build();


  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);

  const port = configService.get<number>('appConfig.port'); 
  const host = configService.get<string>('appConfig.host'); 

  await app.listen(port, () => {
    console.log(`Listening on http://${host}:${port}`);
  });


}
bootstrap();
