import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GqlAuthGuard } from '../user/user.guard';
import { inputAddress, UpdateAddress } from './adress.dto';
import { Adress } from './adress.schema';
import { AdressService } from './adress.service';

@Resolver(() => Adress)
export class AddressResolver {
  constructor(private readonly AddressServ: AdressService) { }

  @Query(() => [Adress])
  @UseGuards(GqlAuthGuard)
  async getAllAdress() {
    return await this.AddressServ.getAllAdresses();
  }

  @Query(() => [Adress])
  @UseGuards(GqlAuthGuard)
  async getAddressByUser(
    @Args({ name: 'id', nullable: false }) id: string,
    @Args({ name: 'skip', nullable: true }) skip?: number) {
    return await this.AddressServ.getAdresses(id, skip);
  }

  @Query(() => Adress)
  @UseGuards(GqlAuthGuard)
  async getAddress(@Args('id') id: string) {
    return await this.AddressServ.getAdress(id);
  }
  @Query(() => Number)
  @UseGuards(GqlAuthGuard)
  async getTotalAdress() {
    return await this.AddressServ.totalAddresses();
  }

  @Mutation(() => Adress)
  @UseGuards(GqlAuthGuard)
  async createAddress(@Args('addressInput') data: inputAddress) {
    return await this.AddressServ.createAddress(data);
  }

  @Mutation(() => Adress)
  @UseGuards(GqlAuthGuard)
  async updateAddress(
    @Args('id') id: string,
    @Args('UpdateAddress') data: UpdateAddress,
  ) {
    return await this.AddressServ.updateAdress(id, data);
  }

  @Mutation(() => Adress)
  @UseGuards(GqlAuthGuard)
  async removeAddress(@Args('id') id: string) {
    return await this.AddressServ.deleteAdress(id);
  }
}
