import { Model } from 'mongoose';
import { OrderDocument } from './order.schema';
export declare class OrderService {
    private Order;
    constructor(Order: Model<OrderDocument>);
    addNewOrder(data: any): Promise<OrderDocument>;
    updateOrder(id: any, data: any): Promise<OrderDocument>;
    removeOrder(id: any): Promise<OrderDocument>;
    getAllOrders(skip?: number): Promise<OrderDocument[]>;
    findBySurname(surname: any, skip?: number): Promise<OrderDocument[]>;
    getOrders(id: any): Promise<OrderDocument[]>;
    getOrder(id: any): Promise<OrderDocument>;
    orderTotal(date: any): Promise<number>;
}
