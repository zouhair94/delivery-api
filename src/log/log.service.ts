import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { GraphQLError } from 'graphql';
import { Model } from 'mongoose';
import { Log, LogDocument } from './log.schema';

@Injectable()
export class LogService {
    
    constructor(@InjectModel(Log.name) private Log: Model<LogDocument>){}

    async getLog(skip=0) {
        return this.Log.find({}).skip(skip).limit(10).populate('by').exec();
    }

    async insertLog(data) {
        return await this.Log.create(data);
    }

}
