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
exports.OrderResolver = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("graphql");
const user_guard_1 = require("../user/user.guard");
const order_dto_1 = require("./order.dto");
const order_schema_1 = require("./order.schema");
const order_service_1 = require("./order.service");
const _ = require("lodash");
let OrderResolver = class OrderResolver {
    constructor(orderServ) {
        this.orderServ = orderServ;
    }
    async addOrder(data) {
        try {
            return await this.orderServ.addNewOrder(data);
        }
        catch (error) {
            return new graphql_2.GraphQLError(error);
        }
    }
    async updateOrder(id, data) {
        try {
            return await this.orderServ.updateOrder(id, data);
        }
        catch (error) {
            return new graphql_2.GraphQLError(error);
        }
    }
    async removeOrder(id) {
        try {
            return await this.orderServ.removeOrder(id);
        }
        catch (error) {
            return new graphql_2.GraphQLError(error);
        }
    }
    async getAllOrders(surname, skip) {
        try {
            if (surname) {
                const orders = await this.orderServ.findBySurname(surname, skip);
                return _.filter(orders, (e) => e.by);
            }
            return await this.orderServ.getAllOrders(skip);
        }
        catch (error) {
            return new graphql_2.GraphQLError(error);
        }
    }
    async getOrders(id) {
        try {
            return await this.orderServ.getOrders(id);
        }
        catch (error) {
            return new graphql_2.GraphQLError(error);
        }
    }
    async getOrder(id) {
        try {
            return await this.orderServ.getOrder(id);
        }
        catch (error) {
            return new graphql_2.GraphQLError(error);
        }
    }
    async getMonthCount(date) {
        try {
            return await this.orderServ.orderTotal(date);
        }
        catch (error) {
            return new graphql_2.GraphQLError(error);
        }
    }
};
__decorate([
    graphql_1.Mutation(() => order_schema_1.Order),
    common_1.UseGuards(user_guard_1.GqlAuthGuard),
    __param(0, graphql_1.Args('orderInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [order_dto_1.inputOrderDto]),
    __metadata("design:returntype", Promise)
], OrderResolver.prototype, "addOrder", null);
__decorate([
    graphql_1.Mutation(() => order_schema_1.Order),
    common_1.UseGuards(user_guard_1.GqlAuthGuard),
    __param(0, graphql_1.Args('id')),
    __param(1, graphql_1.Args('UpdateOrderDto')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, order_dto_1.UpdateOrderDto]),
    __metadata("design:returntype", Promise)
], OrderResolver.prototype, "updateOrder", null);
__decorate([
    graphql_1.Mutation(() => order_schema_1.Order),
    common_1.UseGuards(user_guard_1.GqlAuthGuard),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrderResolver.prototype, "removeOrder", null);
__decorate([
    graphql_1.Query(() => [order_schema_1.Order]),
    common_1.UseGuards(user_guard_1.GqlAuthGuard),
    __param(0, graphql_1.Args({ name: 'surname', nullable: true })),
    __param(1, graphql_1.Args({ name: 'skip', nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], OrderResolver.prototype, "getAllOrders", null);
__decorate([
    graphql_1.Query(() => [order_schema_1.Order]),
    common_1.UseGuards(user_guard_1.GqlAuthGuard),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrderResolver.prototype, "getOrders", null);
__decorate([
    graphql_1.Query(() => order_schema_1.Order),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrderResolver.prototype, "getOrder", null);
__decorate([
    graphql_1.Query(() => Number),
    __param(0, graphql_1.Args('date')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrderResolver.prototype, "getMonthCount", null);
OrderResolver = __decorate([
    graphql_1.Resolver(() => order_schema_1.Order),
    __metadata("design:paramtypes", [order_service_1.OrderService])
], OrderResolver);
exports.OrderResolver = OrderResolver;
//# sourceMappingURL=order.resolver.js.map