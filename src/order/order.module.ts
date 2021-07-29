import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderResolver } from './order.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Order, OrderSchema } from './order.schema';

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
    ]),
  ],
  controllers: [],
  providers: [OrderService, OrderResolver],
  exports: [OrderResolver, OrderService],
})
export class OrderModule {}
