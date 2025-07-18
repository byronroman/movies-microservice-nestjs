import { NestFactory } from '@nestjs/core';
import { AppModule } from '@src/app.module';
import { CustomLoggerService } from '@src/shared/logger/custom-logger.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
  });
  app.useLogger(app.get(CustomLoggerService));
  app.enableCors();
  const logger = app.get(CustomLoggerService);
  logger.log('Microservicio iniciado correctamente');
  await app.listen(3000);
}
void bootstrap();
