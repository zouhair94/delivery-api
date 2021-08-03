import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GraphQLError } from 'graphql';
import { argsToArgsConfig } from 'graphql/type/definition';
import { GqlAuthGuard } from '../user/user.guard';
import { inputOrderDto, UpdateOrderDto } from './order.dto';
import { Order, OrderSchema } from './order.schema';
import { OrderService } from './order.service';
import * as _ from "lodash";

@Resolver(() => Order)
export class OrderResolver {
  constructor(private readonly orderServ: OrderService) {}

  @Mutation(() => Order)
  @UseGuards(GqlAuthGuard)
  async addOrder(@Args('orderInput') data: inputOrderDto) {
    try {
      return await this.orderServ.addNewOrder(data);
    } catch (error) {
      return new GraphQLError(error);
    }
    
  }

  @Mutation(() => Order)
  @UseGuards(GqlAuthGuard)
  async updateOrder(
    @Args('id') id: string,
    @Args('UpdateOrderDto') data: UpdateOrderDto,
  ) {
    try {
      return await this.orderServ.updateOrder(id, data);
    } catch (error) {
      return new GraphQLError(error);
    }
    
  }

  @Mutation(() => Order)
  @UseGuards(GqlAuthGuard)
  async removeOrder(@Args('id') id: string) {
    try {
      return await this.orderServ.removeOrder(id);
    } catch (error) {
      return new GraphQLError(error);
    }
    
  }

  @Query(() => [Order])
  @UseGuards(GqlAuthGuard)
  async getAllOrders(
    @Args({name: 'surname', nullable: true}) surname?: string,
    @Args({name: 'skip', nullable: true}) skip?: number
    ) {
    try {
      
      if(surname){ 
        const orders = await this.orderServ.findBySurname(surname,skip);
        return _.filter(orders, (e) => e.by ) }
      
      return await this.orderServ.getAllOrders(skip);

    } catch (error) {
      return new GraphQLError(error);
    }
    
  }

  @Query(() => [Order])
  @UseGuards(GqlAuthGuard)
  async getOrders(@Args('id') id: string) {
    try {
      return await this.orderServ.getOrders(id);
    } catch (error) {
      return new GraphQLError(error);
    }
    
  }

  @Query(() => Order)
  async getOrder(@Args('id') id: string) {
    try {
      return await this.orderServ.getOrder(id);
    } catch (error) {
      return new GraphQLError(error);
    }
    
    
  }

  @Query(() => Number)
  async getMonthCount(@Args('date') date: string) {
    try {
      return await this.orderServ.orderTotal(date);
    
    } catch (error) {
      return new GraphQLError(error);
    } 
  }
}
