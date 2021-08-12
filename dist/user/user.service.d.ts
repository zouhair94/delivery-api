import { InputUserDto } from './inputs-user.dto';
import { UserDocument } from './user.schema';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import { GraphQLError } from 'graphql';
export declare class UserService {
    private jwtService;
    private User;
    constructor(jwtService: JwtService, User: Model<UserDocument>);
    createUser(data: InputUserDto): Promise<UserDocument | GraphQLError>;
    login(password: string, email: string): Promise<string | GraphQLError>;
    getAllDelivery(): Promise<UserDocument[]>;
    findAll(): Promise<UserDocument[]>;
    findBySurname(surname: any): Promise<UserDocument[]>;
    deleteUser(id: any): Promise<UserDocument | GraphQLError>;
    userById(id: any): Promise<UserDocument>;
    updateUser(id: any, data: any): Promise<UserDocument>;
    totalUsers(): Promise<number>;
}
