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

  async getAllOrders(skip=0) {
    return await this.Order.find({}).populate('from').populate('to').populate('by').limit(10).skip(skip).exec() ;
  }

  async findBySurname(surname, skip: number=0) {
    try {
      
      const order = await this.Order.find({
        by: {$exists: true}
      })
      .populate('from')
      .populate('to')
      .populate(
        { 
          path:'by',
          match: { surname: { $regex: '.*'+surname+'.*' } }
          

        })
      .limit(10)
      .skip(skip)  
      .exec();
      
      return order;
    } catch (error) {
      throw error;
    }
  }

  async getOrders(id) {
    return await this.Order.find({ by: id }).populate('from').populate('to').populate('by');
  }

  async getOrder(id) {
    return await this.Order.findById(id).populate('from').populate('to').populate('by');
  }

  async orderTotal(date) {
    return await this.Order.count({ createdAt: { $gte: date } });
  }
}
