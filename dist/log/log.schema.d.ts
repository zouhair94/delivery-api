import { Document, Types } from 'mongoose';
import * as mongoose from 'mongoose';
import { User } from '../user/user.schema';
export declare type LogDocument = Log & Document;
export declare class Log {
    _id: Types.ObjectId;
    title: string;
    description: string;
    by: User;
}
export declare const LogSchema: mongoose.Schema<Document<Log, any, any>, mongoose.Model<any, any, any>, undefined, any>;
