import { GraphQLError } from 'graphql';
import { inputOrderDto, UpdateOrderDto } from './order.dto';
import { OrderService } from './order.service';
export declare class OrderResolver {
    private readonly orderServ;
    constructor(orderServ: OrderService);
    addOrder(data: inputOrderDto): Promise<GraphQLError | import("./order.schema").OrderDocument>;
    updateOrder(id: string, data: UpdateOrderDto): Promise<GraphQLError | import("./order.schema").OrderDocument>;
    removeOrder(id: string): Promise<GraphQLError | import("./order.schema").OrderDocument>;
    getAllOrders(surname?: string, skip?: number): Promise<any>;
    getOrders(id: string): Promise<GraphQLError | import("./order.schema").OrderDocument[]>;
    getOrder(id: string): Promise<GraphQLError | import("./order.schema").OrderDocument>;
    getMonthCount(date: string): Promise<number | GraphQLError>;
}
