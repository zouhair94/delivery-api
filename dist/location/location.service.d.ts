import { Model } from 'mongoose';
import { LocationDocument } from './location.schema';
export declare class LocationService {
    private Location;
    constructor(Location: Model<LocationDocument>);
    getLocationByUserId(id: any): Promise<LocationDocument>;
    getLocationsByUserId(id: any): Promise<LocationDocument[]>;
    addLocation(data: any): Promise<LocationDocument>;
}
