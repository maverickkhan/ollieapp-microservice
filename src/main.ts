import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger('MAIN');
  const PORT = +process.env.PORT || 3001;
  const options = {
    host: process.env.HOST || '127.0.0.1',
    port: PORT,
    retryAttempts: +process.env.RETRY || 3,
    retryDelay: +process.env.RETRYDELAY || 10,
  };
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      options: options,
    },
  );
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // only allows known properties
    }),
  );
  await app.listen();
  logger.log(`Listening on port ${PORT}`);
}
bootstrap();
