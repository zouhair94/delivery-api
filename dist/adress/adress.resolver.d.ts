import { inputAddress, UpdateAddress } from './adress.dto';
import { AdressService } from './adress.service';
export declare class AddressResolver {
    private readonly AddressServ;
    constructor(AddressServ: AdressService);
    getAllAdress(): Promise<import("./adress.schema").AdressDocument[]>;
    getAddressByUser(id: string): Promise<import("./adress.schema").AdressDocument[]>;
    getAddress(id: string): Promise<import("./adress.schema").AdressDocument>;
    getTotalAdress(): Promise<number>;
    createAddress(data: inputAddress): Promise<import("./adress.schema").AdressDocument>;
    updateAddress(id: string, data: UpdateAddress): Promise<import("./adress.schema").AdressDocument>;
    removeAddress(id: string): Promise<import("./adress.schema").AdressDocument>;
}
