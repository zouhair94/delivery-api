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
exports.AddressResolver = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const user_guard_1 = require("../user/user.guard");
const adress_dto_1 = require("./adress.dto");
const adress_schema_1 = require("./adress.schema");
const adress_service_1 = require("./adress.service");
let AddressResolver = class AddressResolver {
    constructor(AddressServ) {
        this.AddressServ = AddressServ;
    }
    async getAllAdress() {
        return await this.AddressServ.getAllAdresses();
    }
    async getAddressByUser(id) {
        return await this.AddressServ.getAdresses(id);
    }
    async getAddress(id) {
        return await this.AddressServ.getAdress(id);
    }
    async getTotalAdress() {
        return await this.AddressServ.totalAddresses();
    }
    async createAddress(data) {
        return await this.AddressServ.createAddress(data);
    }
    async updateAddress(id, data) {
        return await this.AddressServ.updateAdress(id, data);
    }
    async removeAddress(id) {
        return await this.AddressServ.deleteAdress(id);
    }
};
__decorate([
    graphql_1.Query(() => [adress_schema_1.Adress]),
    common_1.UseGuards(user_guard_1.GqlAuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AddressResolver.prototype, "getAllAdress", null);
__decorate([
    graphql_1.Query(() => [adress_schema_1.Adress]),
    common_1.UseGuards(user_guard_1.GqlAuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AddressResolver.prototype, "getAddressByUser", null);
__decorate([
    graphql_1.Query(() => adress_schema_1.Adress),
    common_1.UseGuards(user_guard_1.GqlAuthGuard),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AddressResolver.prototype, "getAddress", null);
__decorate([
    graphql_1.Query(() => Number),
    common_1.UseGuards(user_guard_1.GqlAuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AddressResolver.prototype, "getTotalAdress", null);
__decorate([
    graphql_1.Mutation(() => adress_schema_1.Adress),
    common_1.UseGuards(user_guard_1.GqlAuthGuard),
    __param(0, graphql_1.Args('addressInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [adress_dto_1.inputAddress]),
    __metadata("design:returntype", Promise)
], AddressResolver.prototype, "createAddress", null);
__decorate([
    graphql_1.Mutation(() => adress_schema_1.Adress),
    common_1.UseGuards(user_guard_1.GqlAuthGuard),
    __param(0, graphql_1.Args('id')),
    __param(1, graphql_1.Args('UpdateAddress')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, adress_dto_1.UpdateAddress]),
    __metadata("design:returntype", Promise)
], AddressResolver.prototype, "updateAddress", null);
__decorate([
    graphql_1.Mutation(() => adress_schema_1.Adress),
    common_1.UseGuards(user_guard_1.GqlAuthGuard),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AddressResolver.prototype, "removeAddress", null);
AddressResolver = __decorate([
    graphql_1.Resolver(() => adress_schema_1.Adress),
    __metadata("design:paramtypes", [adress_service_1.AdressService])
], AddressResolver);
exports.AddressResolver = AddressResolver;
//# sourceMappingURL=adress.resolver.js.map