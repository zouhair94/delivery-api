import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { argsToArgsConfig } from 'graphql/type/definition';
import { GqlAuthGuard } from '../user/user.guard';
import { inputOrderDto } from './order.dto';
import { Order, OrderSchema } from './order.schema';
import { OrderService } from './order.service';

@Resolver(() => Order)
export class OrderResolver {
  constructor(private readonly orderServ: OrderService) {}

  @Mutation(() => Order)
  @UseGuards(GqlAuthGuard)
  async addOrder(@Args('orderInput') data: inputOrderDto) {
    return await this.orderServ.addNewOrder(data);
  }

  @Mutation(() => Order)
  @UseGuards(GqlAuthGuard)
  async updateOrder(
    @Args('id') id: string,
    @Args('orderInput') data: inputOrderDto,
  ) {
    return await this.orderServ.updateOrder(id, data);
  }

  @Mutation(() => Order)
  @UseGuards(GqlAuthGuard)
  async removeOrder(@Args('id') id: string) {
    return await this.orderServ.removeOrder(id);
  }

  @Query(() => [Order])
  @UseGuards(GqlAuthGuard)
  async getAllOrders() {
    return await this.orderServ.getAllOrders();
  }

  @Query(() => [Order])
  @UseGuards(GqlAuthGuard)
  async getOrders(@Args('id') id: string) {
    return await this.orderServ.getOrders(id);
  }

  @Query(() => Order)
  async getOrder(@Args('id') id: string) {
    return await this.orderServ.getOrder(id);
  }

  @Query(() => Number)
  async getMonthCount(@Args('date') date: string) {
    return await this.orderServ.orderTotal(date);
  }
}
