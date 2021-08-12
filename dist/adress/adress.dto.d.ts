import * as mongoose from 'mongoose';
declare class UserIn {
    _id: mongoose.Schema.Types.ObjectId;
}
export declare class inputAddress {
    title: string;
    address: string;
    by: UserIn;
    zipCode?: number;
    lat?: string;
    lng?: string;
}
export declare class UpdateAddress {
    title: string;
    address: string;
    lat?: string;
    lng?: string;
}
export {};
