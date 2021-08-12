import { GraphQLError } from 'graphql';
import { LogService } from './log.service';
export declare class LogResolver {
    private LogServ;
    constructor(LogServ: LogService);
    getLogs(skip?: number): Promise<GraphQLError | import("./log.schema").LogDocument[]>;
}
