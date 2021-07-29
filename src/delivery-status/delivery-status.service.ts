import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DeliverySta, DeliveryStatusDocument } from './delivery-status.schema';

@Injectable()
export class DeliveryStatusService {
    constructor(
        @InjectModel(DeliverySta.name) private status: Model<DeliveryStatusDocument>,
    ) {}
    
    async getDeliveryStatus(id) {
        return await this.status.findOne({delivery: id}).exec();
    }

    async CreateStatus(data) {
        return await this.status.create(data);
    }

    async updateStatus(id, status) {
        return await this.status.updateOne({delivery: id}, {status});
    }
}
