import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AdressModule } from './adress/adress.module';
import { DeliveryModule } from './delivery/delivery.module';
import { LocationModule } from './location/location.module';
import { join } from 'path';
import { LogModule } from './log/log.module';
import { OrderModule } from './order/order.module';


@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      debug: true,
      playground: true,
      
    }),
    MongooseModule.forRoot('mongodb://root:R007P4ss@delivery-db:27017/delivery?authSource=admin&readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false'),
    UserModule,
    AdressModule,
    DeliveryModule,
    LocationModule,
    LogModule,
    OrderModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
