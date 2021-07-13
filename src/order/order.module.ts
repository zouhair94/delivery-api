import { Module } from '@nestjs/common';
import { OrderService } from './order.service';

@Module({
  controllers: [],
  providers: [OrderService]
})
export class OrderModule {}
