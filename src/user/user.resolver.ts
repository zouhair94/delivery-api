import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { InputUserDto } from './inputs-user.dto';
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
      console.error(error);
    }
  }

  @Query(() => [User])
  @UseGuards(GqlAuthGuard)
  async findAllUser() {
    try {
      return await this.user.findAll();
    } catch (error) {
      console.error(error);
    }
  }
}
