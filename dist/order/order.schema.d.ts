import { Document, Types } from 'mongoose';
import * as mongoose from 'mongoose';
import { Adress } from '../adress/adress.schema';
import { User } from '../user/user.schema';
export declare type OrderDocument = Order & Document;
export declare class Order {
    _id: Types.ObjectId;
    title: string;
    description: string;
    from: Adress;
    to: Adress;
    orderNumber: number;
    by: User;
    delivery: User;
    status: string;
    createdAt: string;
}
export declare const OrderSchema: mongoose.Schema<Document<Order, any, any>, mongoose.Model<any, any, any>, undefined, any>;
