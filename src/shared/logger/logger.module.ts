import { Module } from '@nestjs/common';
import { CustomLoggerService } from '@src/shared/logger/custom-logger.service';

@Module({
  providers: [CustomLoggerService],
  exports: [CustomLoggerService],
})
export class LoggerModule {}
