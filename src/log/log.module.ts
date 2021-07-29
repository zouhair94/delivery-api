import { Module } from '@nestjs/common';
import { LogService } from './log.service';
import { LogResolver } from './log.resolver';

@Module({
  providers: [LogService, LogResolver]
})
export class LogModule {}
