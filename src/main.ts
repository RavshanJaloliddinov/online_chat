import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: "*",
    methods: "*"
  })
  const config = new DocumentBuilder()
    .setTitle("microservice")
    .setDescription('api')
    .setVersion('1.0')
    .addTag('mircoservice')
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup("api", app, document)


  await app.listen(4000), () => {
    console.log(`Listening on ${4000}`)
  };
}
bootstrap();
