import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GqlAuthGuard } from '../user/user.guard';
import { inputLocation } from './location.dto';
import { Location } from './location.schema';
import { LocationService } from './location.service';

@Resolver(() => Location)
export class LocationResolver {
  constructor(private readonly LocationServ: LocationService) {}

  @Query(() => Location)
  @UseGuards(GqlAuthGuard)
  async getLocation(@Args('id') id: string) {
    return await this.LocationServ.getLocationByUserId(id);
  }

  @Query(() => [Location])
  @UseGuards(GqlAuthGuard)
  async getLocations(@Args('id') id: string) {
    return await this.LocationServ.getLocationsByUserId(id);
  }

  @Mutation(() => Location)
  @UseGuards(GqlAuthGuard)
  async addLocation(@Args('inputLocation') locationInput: inputLocation) {
    return await this.LocationServ.addLocation(locationInput);
  }
}
