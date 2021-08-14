"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const graphql_1 = require("graphql");
const mongoose_2 = require("mongoose");
const order_schema_1 = require("./order.schema");
let OrderService = class OrderService {
    constructor(Order) {
        this.Order = Order;
    }
    async addNewOrder(data) {
        return await this.Order.create(data);
    }
    async updateOrder(id, data) {
        try {
            return await this.Order.findByIdAndUpdate(id, data);
        }
        catch (error) {
            new graphql_1.GraphQLError('problem on updating Order!');
        }
    }
    async removeOrder(id) {
        return await this.Order.findByIdAndRemove(id);
    }
    async getAllOrders(skip = 0) {
        return await this.Order.find({}).populate('from').populate('to').populate('by').limit(10).skip(skip).exec();
    }
    async findBySurname(surname, skip = 0) {
        try {
            const order = await this.Order.find({
                by: { $exists: true }
            })
                .populate('from')
                .populate('to')
                .populate({
                path: 'by',
                match: { surname: { $regex: '.*' + surname + '.*' } }
            })
                .limit(10)
                .skip(skip)
                .exec();
            return order;
        }
        catch (error) {
            throw error;
        }
    }
    async getOrders(id) {
        return await this.Order.find({ by: id }).populate('from').populate('to').populate('by');
    }
    async getOrder(id) {
        return await this.Order.findById(id).populate('from').populate('to').populate('by');
    }
    async orderTotal(date) {
        return await this.Order.count({ createdAt: { $gte: date } });
    }
};
OrderService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(order_schema_1.Order.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], OrderService);
exports.OrderService = OrderService;
//# sourceMappingURL=order.service.js.map