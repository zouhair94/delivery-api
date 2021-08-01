import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { GraphQLError } from 'graphql';
import { Model } from 'mongoose';
import { Order, OrderDocument } from './order.schema';

@Injectable()
export class OrderService {
  constructor(@InjectModel(Order.name) private Order: Model<OrderDocument>) {}

  async addNewOrder(data) {
    return await this.Order.create(data);
  }

  async updateOrder(id, data) {
    try {
      return await this.Order.findByIdAndUpdate(id, data);
    } catch (error) {
      new GraphQLError('problem on updating Order!');
    }
  }

  async removeOrder(id) {
    return await this.Order.findByIdAndRemove(id);
  }

  async getAllOrders() {
    return await this.Order.find({}).populate('from','to') ;
  }

  async getOrders(id) {
    return await this.Order.find({ by: id });
  }

  async getOrder(id) {
    return await this.Order.findById(id);
  }

  async orderTotal(date) {
    return await this.Order.count({ createdAt: { $gte: date } });
  }
}
