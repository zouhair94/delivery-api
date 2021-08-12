import { GraphQLError } from 'graphql';
import { InputUserDto, UpdateUserDto } from './inputs-user.dto';
import { UserService } from './user.service';
export declare class UserResolver {
    private readonly user;
    constructor(user: UserService);
    createUser(input: InputUserDto): Promise<import("./user.schema").UserDocument | GraphQLError>;
    login(password: string, email: string): Promise<string | GraphQLError>;
    updateUser(id: string, data: UpdateUserDto): Promise<import("./user.schema").UserDocument | GraphQLError>;
    deleteUser(id: string): Promise<import("./user.schema").UserDocument | GraphQLError>;
    findAllUser(surname?: string): Promise<import("./user.schema").UserDocument[] | GraphQLError>;
    findAllDelivery(): Promise<import("./user.schema").UserDocument[] | GraphQLError>;
    totalUsers(): Promise<number | GraphQLError>;
    findUser(id: string): Promise<import("./user.schema").UserDocument | GraphQLError>;
}
