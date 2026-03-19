import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setTitle('CRM')
  .setDescription('Projeto ConnectElas')
  .setContact("SevenCode","https://github.com/CodeSeven-Turma-JavaScript-13","codeseven777@hotmail.com")
  .setVersion('1.0')
  .addBearerAuth()
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/swagger', app, document);




  await app.listen(process.env.PORT ?? 4000);
  app.useGlobalPipes(new ValidationPipe());
}
bootstrap();
