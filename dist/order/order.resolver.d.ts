import { GraphQLError } from 'graphql';
import { inputOrderDto, UpdateOrderDto } from './order.dto';
import { OrderService } from './order.service';
export declare class OrderResolver {
    private readonly orderServ;
    constructor(orderServ: OrderService);
    addOrder(data: inputOrderDto): Promise<import("./order.schema").OrderDocument | GraphQLError>;
    updateOrder(id: string, data: UpdateOrderDto): Promise<import("./order.schema").OrderDocument | GraphQLError>;
    removeOrder(id: string): Promise<import("./order.schema").OrderDocument | GraphQLError>;
    getAllOrders(surname?: string, skip?: number): Promise<any>;
    getOrders(id: string): Promise<import("./order.schema").OrderDocument[] | GraphQLError>;
    getOrder(id: string): Promise<import("./order.schema").OrderDocument | GraphQLError>;
    getMonthCount(date: string): Promise<number | GraphQLError>;
}
