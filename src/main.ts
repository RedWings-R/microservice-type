import { NestFactory } from '@nestjs/core';
import { Transport } from "@nestjs/microservices";
import { AppModule } from './app.module';
import { Logger } from "@nestjs/common";
import { environement } from 'environements/environement.dev';

const logger = new Logger();

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.TCP,
    options: {
      host: environement.ADDR,
      port: environement.PORT
    }
  });
  app.listen().then(()=>{
    logger.log(`Microservice started on port : ${environement.PORT} and adresse : ${environement.ADDR}`)
  });
}
bootstrap();