import { inputLocation } from './location.dto';
import { LocationService } from './location.service';
export declare class LocationResolver {
    private readonly LocationServ;
    constructor(LocationServ: LocationService);
    getLocation(id: string): Promise<import("./location.schema").LocationDocument>;
    getLocations(id: string): Promise<import("./location.schema").LocationDocument[]>;
    addLocation(locationInput: inputLocation): Promise<import("./location.schema").LocationDocument>;
}
