import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderResolver } from './order.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Order, OrderSchema } from './order.schema';
import { User, userSchema } from '../user/user.schema';
import { Adress, adressSchema } from '../adress/adress.schema';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {     
        name: Order.name,
        useFactory: () => {
          const schema = OrderSchema;
          return schema;
        },              
      },
      {
        name: User.name,
        useFactory: () => {
          const schema = userSchema;
          return schema;
        },
      },{
        name: Adress.name,
        useFactory: () => {
          const schema = adressSchema;
          return schema;
        },
      }
    ]),
  ],
  controllers: [],
  providers: [OrderService, OrderResolver],
  exports: [OrderResolver, OrderService],
})
export class OrderModule {}
