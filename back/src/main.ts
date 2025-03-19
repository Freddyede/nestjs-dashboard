import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { corsConfig } from './config/cors.config';
import { rabbitConfig } from './config/rabbit.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, corsConfig);
  const dashboardMicroService = await NestFactory.createMicroservice(
    AppModule,
    rabbitConfig,
  );
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
  await dashboardMicroService.listen();
}
bootstrap().then();
