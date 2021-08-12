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
exports.UserResolver = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("graphql");
const inputs_user_dto_1 = require("./inputs-user.dto");
const user_guard_1 = require("./user.guard");
const user_schema_1 = require("./user.schema");
const user_service_1 = require("./user.service");
let UserResolver = class UserResolver {
    constructor(user) {
        this.user = user;
    }
    async createUser(input) {
        try {
            return await this.user.createUser(input);
        }
        catch (error) {
            return new graphql_2.GraphQLError(error);
        }
    }
    async login(password, email) {
        try {
            return await this.user.login(password, email);
        }
        catch (error) {
            return new graphql_2.GraphQLError(error);
        }
    }
    async updateUser(id, data) {
        try {
            return await this.user.updateUser(id, data);
        }
        catch (error) {
            return new graphql_2.GraphQLError(error);
        }
    }
    async deleteUser(id) {
        return await this.user.deleteUser(id);
    }
    async findAllUser(surname) {
        try {
            if (surname)
                return await this.user.findBySurname(surname);
            return await this.user.findAll();
        }
        catch (error) {
            return new graphql_2.GraphQLError(error);
        }
    }
    async findAllDelivery() {
        try {
            return await this.user.getAllDelivery();
        }
        catch (error) {
            return new graphql_2.GraphQLError(error);
        }
    }
    async totalUsers() {
        try {
            return await this.user.totalUsers();
        }
        catch (error) {
            return new graphql_2.GraphQLError(error);
        }
    }
    async findUser(id) {
        try {
            return await this.user.userById(id);
        }
        catch (error) {
            return new graphql_2.GraphQLError(error);
        }
    }
};
__decorate([
    graphql_1.Mutation(() => user_schema_1.User),
    __param(0, graphql_1.Args('InputUserDto')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inputs_user_dto_1.InputUserDto]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "createUser", null);
__decorate([
    graphql_1.Mutation(() => String),
    __param(0, graphql_1.Args('password')),
    __param(1, graphql_1.Args('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "login", null);
__decorate([
    graphql_1.Mutation(() => user_schema_1.User),
    common_1.UseGuards(user_guard_1.GqlAuthGuard),
    __param(0, graphql_1.Args('id')),
    __param(1, graphql_1.Args('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, inputs_user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "updateUser", null);
__decorate([
    graphql_1.Mutation(() => user_schema_1.User),
    common_1.UseGuards(user_guard_1.GqlAuthGuard),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "deleteUser", null);
__decorate([
    graphql_1.Query(() => [user_schema_1.User]),
    common_1.UseGuards(user_guard_1.GqlAuthGuard),
    __param(0, graphql_1.Args({ name: 'surname', nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "findAllUser", null);
__decorate([
    graphql_1.Query(() => [user_schema_1.User]),
    common_1.UseGuards(user_guard_1.GqlAuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "findAllDelivery", null);
__decorate([
    graphql_1.Query(() => Number),
    common_1.UseGuards(user_guard_1.GqlAuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "totalUsers", null);
__decorate([
    graphql_1.Query(() => user_schema_1.User),
    common_1.UseGuards(user_guard_1.GqlAuthGuard),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "findUser", null);
UserResolver = __decorate([
    graphql_1.Resolver(() => user_schema_1.User),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserResolver);
exports.UserResolver = UserResolver;
//# sourceMappingURL=user.resolver.js.map