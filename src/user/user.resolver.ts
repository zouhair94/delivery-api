import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GraphQLError } from 'graphql';
import { InputUserDto, UpdateUserDto } from './inputs-user.dto';
import { GqlAuthGuard } from './user.guard';
import { User } from './user.schema';
import { UserService } from './user.service';

@Resolver(() => User)
export class UserResolver {
  
  constructor(private readonly user: UserService) {}

  @Mutation(() => User)
  async createUser(@Args('InputUserDto') input: InputUserDto) {
    try {
      return await this.user.createUser(input);
    } catch (error) {
      console.error(error);
    }
  }

  @Mutation(() => String)
  async login(
    @Args('password') password: string,
    @Args('email') email: string,
  ) {
    try {
      return await this.user.login(password, email);
    } catch (error) {
      return error
    }
  }

  @Mutation(() => User)
  @UseGuards(GqlAuthGuard)
  async updateUser(
    @Args('id') id: string,
    @Args('data') data: UpdateUserDto,
  ) {
    try {
      return await this.user.updateUser(id, data)
    } catch (error) {
      return error
    }
  }

  @Mutation(() => User)
  @UseGuards(GqlAuthGuard)
  async deleteUser(
    @Args('id') id: string,
  ){
    return await this.user.deleteUser(id);
  }

  @Query(() => [User])
  @UseGuards(GqlAuthGuard)
  async findAllUser(@Args({name: 'surname', nullable: true}) surname?: string) {
    try {
      if (surname) return await this.user.findBySurname(surname);
      return await this.user.findAll();
    } catch (error) {
      console.error(error);
    }
  }

  @Query(() => Number)
  @UseGuards(GqlAuthGuard)
  async totalUsers() {
    try {
      return await this.user.totalUsers();
    } catch (error) {
      console.error(error);
    }
  }

  @Query(() => User)
  @UseGuards(GqlAuthGuard)
  async findUser(@Args('id') id: string) {
    try {
      return await this.user.userById(id);
    } catch (error) {
      return new GraphQLError(error);
    }
  }
}
