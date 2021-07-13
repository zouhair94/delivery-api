import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { inputOrderDto } from './order.dto';
import { Order, OrderSchema } from './order.schema';
import { OrderService } from './order.service';

@Resolver(() => Order)
export class OrderResolver {
  constructor(private readonly orderServ: OrderService) {}

  @Mutation()
  async addOrder(data: inputOrderDto) {
    return await this.orderServ.addNewOrder(data);
  }

  @Mutation()
  async updateOrder(id, data: inputOrderDto) {
    return await this.orderServ.updateOrder(id, data);
  }

  @Mutation()
  async removeOrder(id) {
    return await this.orderServ.removeOrder(id);
  }

  @Query(() => [Order])
  async getAllOrders() {
    return await this.orderServ.getAllOrders();
  }

  @Query(() => [Order])
  async getOrders(id) {
    return await this.orderServ.getOrders(id);
  }

  @Query(() => Order)
  async getOrder(id) {
    return await this.orderServ.getOrder(id);
  }
}
