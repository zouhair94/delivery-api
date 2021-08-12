import { Model } from 'mongoose';
import { LogDocument } from './log.schema';
export declare class LogService {
    private Log;
    constructor(Log: Model<LogDocument>);
    getLog(skip?: number): Promise<LogDocument[]>;
    insertLog(data: any): Promise<LogDocument>;
}
