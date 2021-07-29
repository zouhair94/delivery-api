import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { GraphQLError } from 'graphql/error/GraphQLError';
import { Model } from 'mongoose';
import { Location, LocationDocument } from './location.schema';

@Injectable({})
export class LocationService {
  constructor(
    @InjectModel(Location.name) private Location: Model<LocationDocument>,
  ) {}

  async getLocationByUserId(id) {
    return await this.Location.findOne({ by: id }).exec();
  }

  async getLocationsByUserId(id) {
    return await this.Location.find({ by: id }).exec();
  }

  async addLocation(data) {
    return await this.Location.create(data);
  }
}
