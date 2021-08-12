import { Document, Types } from 'mongoose';
import { User } from '../user/user.schema';
export declare type AdressDocument = Adress & Document;
import * as mongoose from 'mongoose';
declare class UserIn {
    _id: mongoose.Schema.Types.ObjectId;
}
export declare class Adress {
    _id: Types.ObjectId;
    title: string;
    address: string;
    zipCode: string;
    lat: string;
    lng: string;
    by: UserIn | User;
    createdAt: string;
}
export declare const adressSchema: mongoose.Schema<Document<Adress, any, any>, mongoose.Model<any, any, any>, undefined, any>;
export {};
