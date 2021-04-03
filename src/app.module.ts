import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AdressModule } from './adress/adress.module';
import { DeliveryModule } from './delivery/delivery.module';
import { DeliveryStatusModule } from './delivery-status/delivery-status.module';
import { LocationModule } from './location/location.module';
import { join } from 'path';
import { LogModule } from './log/log.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      debug: true,
      playground: true,
    }),
    MongooseModule.forRoot('mongodb://localhost/delivery'),
    UserModule,
    AdressModule,
    DeliveryModule,
    DeliveryStatusModule,
    LocationModule,
    LogModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
