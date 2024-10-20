import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);


  app.enableCors({
    origin: "*",
    methods: "*"
  });


  app.use(cookieParser());


  const config = new DocumentBuilder()
    .setTitle("Microservice") 
    .setDescription('API documentation')
    .setVersion('1.0')
    .addTag('microservice')
    .build();
    
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);
  await app.listen(4000);
  console.log(`Listening on port 4000`); 
}

bootstrap();
