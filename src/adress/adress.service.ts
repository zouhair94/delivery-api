import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { GraphQLError } from 'graphql/error/GraphQLError';
import { Model } from 'mongoose';
import { Adress, AdressDocument } from './adress.schema';

@Injectable()
export class AdressService {
  constructor(
    @InjectModel(Adress.name) private Address: Model<AdressDocument>,
  ) { }

  async getAdresses(user,skip=null) {
    try {
      return await this.Address.find({ by: user }).populate('by').limit(10).skip(skip);
    } catch (e) {
      new GraphQLError(e);
    }
  }

  async getAllAdresses() {
    try {
      return await this.Address.find({}).populate('by');
    } catch (e) {
      new GraphQLError(e);
    }
  }

  async getAdress(id) {
    try {
      return await this.Address.findById(id).populate('by');
    } catch (e) {
      new GraphQLError(e);
    }
  }

  async createAddress(data) {
    return await this.Address.create(data);
  }

  async updateAdress(id, update) {
    try {
      return await this.Address.findByIdAndUpdate(id, update);
    } catch (e) {
      new GraphQLError(e);
    }
  }

  async deleteAdress(id) {
    try {
      return await this.Address.findByIdAndRemove(id);
    } catch (e) {
      new GraphQLError(e);
    }
  }

  async totalAddresses() {
    try {
      return await this.Address.count();
    } catch (e) {
      new GraphQLError(e);
    }
  }

}
