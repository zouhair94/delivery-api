import { Document, Types } from 'mongoose';
export declare type UserDocument = User & Document;
export declare class User {
    _id: Types.ObjectId;
    name: string;
    surname: string;
    email: string;
    password: string;
    phone: string;
    companyId: string;
    role: string;
    credit: number;
    token: string;
}
export declare const userSchema: import("mongoose").Schema<Document<User, any, any>, import("mongoose").Model<any, any, any>, undefined, any>;
