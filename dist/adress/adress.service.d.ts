import { Model } from 'mongoose';
import { AdressDocument } from './adress.schema';
export declare class AdressService {
    private Address;
    constructor(Address: Model<AdressDocument>);
    getAdresses(user: any): Promise<AdressDocument[]>;
    getAllAdresses(): Promise<AdressDocument[]>;
    getAdress(id: any): Promise<AdressDocument>;
    createAddress(data: any): Promise<AdressDocument>;
    updateAdress(id: any, update: any): Promise<AdressDocument>;
    deleteAdress(id: any): Promise<AdressDocument>;
    totalAddresses(): Promise<number>;
}
