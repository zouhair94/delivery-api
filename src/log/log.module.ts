import { Module } from '@nestjs/common';
import { LogService } from './log.service';
import { LogResolver } from './log.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { LogSchema, Log } from './log.schema';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: Log.name,
        useFactory: () => {
          const schema = LogSchema;
          return schema;
        },
      }])
  ],
  providers: [LogService, LogResolver],
  exports: [LogService, LogResolver],

})
export class LogModule { }
