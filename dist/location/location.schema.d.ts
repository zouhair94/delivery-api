import { Document, Types } from 'mongoose';
import * as mongoose from 'mongoose';
import { User } from '../user/user.schema';
export declare type LocationDocument = Location & Document;
export declare class Location {
    _id: Types.ObjectId;
    lat: string;
    lng: string;
    by: User;
}
export declare const locationSchema: mongoose.Schema<Document<Location, any, any>, mongoose.Model<any, any, any>, undefined, any>;
