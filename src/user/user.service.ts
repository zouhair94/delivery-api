import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { InputUserDto, updateUserDto } from './inputs-user.dto';
import { User, UserDocument } from './user.schema';
import { Model, Types } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { GraphQLError } from 'graphql';

@Injectable()
export class UserService {
  constructor(
    private jwtService: JwtService,
    @InjectModel(User.name) private User: Model<UserDocument>,
  ) {}
  async createUser(data: InputUserDto) {
    try {
      const isUser = await this.User.findOne({
        email: data.email,
      });
      if (isUser) {
        throw new GraphQLError('This account already exists.');
      }

      const salt = await bcrypt.genSalt();
      data.password = await bcrypt.hash(data.password, salt).then((r) => r);

      return await new this.User(data).save();
    } catch (error) {
      console.error(error);
    }
  }
  async login(password: string, email: string) {
    try {
      const user = await this.User.findOne({
        email,
      });
      if (user) {
        const checkPass = await bcrypt.compare(password, user.password);
        if (checkPass) {
          return await this.jwtService.signAsync({ email, _id: user._id });
        }
        throw new GraphQLError('Wrong Password.');
      }
      throw new GraphQLError("E-mail doesn't exist.");
    } catch (error) {
      console.error(error);
    }
  }
  async findAll() {
    try {
      return await this.User.find({});
    } catch (error) {
      console.error(error);
    }
  }
}
