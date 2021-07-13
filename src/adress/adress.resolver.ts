import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Adress } from './adress.schema';
import { AdressService } from './adress.service';

@Resolver(() => Adress)
export class AddressResolver {
  constructor(private readonly AddressServ: AdressService) {}

  @Query(() => [Adress])
  async getAllAdress() {
    return await this.AddressServ.getAllAdresses();
  }

  @Query(() => [Adress])
  async getAddressByUser(id) {
    return await this.AddressServ.getAdresses(id);
  }

  @Query(() => Adress)
  async getAddress(id) {
    return await this.AddressServ.getAdress(id);
  }

  @Mutation()
  async createAddress(data) {
    return await this.AddressServ.createAddress(data);
  }

  @Mutation()
  async updateAddress(id, data) {
    return await this.AddressServ.updateAdress(id, data);
  }

  @Mutation()
  async removeAddress(id) {
    return await this.AddressServ.deleteAdress(id);
  }
}
