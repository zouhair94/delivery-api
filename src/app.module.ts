import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
    }),
    MongooseModule.forRoot('mongodb://localhost/delivery')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
