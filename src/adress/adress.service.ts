import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { GraphQLError } from 'graphql/error/GraphQLError';
import { Model } from 'mongoose';
import { Adress, AdressDocument } from './adress.schema';

@Injectable()
export class AdressService {
  constructor(
    @InjectModel(Adress.name) private Address: Model<AdressDocument>,
  ) {}

  async getAdresses(user) {
    try {
      return await this.Address.find({ by: user });
    } catch (e) {
      new GraphQLError('problem on retrieving addresses!');
    }
  }

  async getAllAdresses() {
    try {
      return await this.Address.find({});
    } catch (e) {
      new GraphQLError('problem on retrieving addresses!');
    }
  }

  async getAdress(id) {
    try {
      return await this.Address.findById(id);
    } catch (e) {
      new GraphQLError('problem on retrieving addresses!');
    }
  }

  async createAddress(data) {
    return await this.Address.create(data);
  }

  async updateAdress(id, update) {
    try {
      return await this.Address.findByIdAndUpdate(id, update);
    } catch (e) {
      new GraphQLError('problem on updating address!');
    }
  }

  async deleteAdress(id) {
    return await this.Address.findByIdAndRemove(id);
  }

  async totalAddresses() {
    return await this.Address.count();
  }

}
