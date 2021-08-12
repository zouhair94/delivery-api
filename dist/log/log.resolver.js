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
exports.LogResolver = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const user_guard_1 = require("../user/user.guard");
const graphql_2 = require("graphql");
const log_schema_1 = require("./log.schema");
const log_service_1 = require("./log.service");
let LogResolver = class LogResolver {
    constructor(LogServ) {
        this.LogServ = LogServ;
    }
    async getLogs(skip) {
        try {
            return await this.LogServ.getLog(skip);
        }
        catch (error) {
            return new graphql_2.GraphQLError(error);
        }
    }
};
__decorate([
    graphql_1.Query(() => [log_schema_1.Log]),
    common_1.UseGuards(user_guard_1.GqlAuthGuard),
    __param(0, graphql_1.Args({ name: 'skip', nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], LogResolver.prototype, "getLogs", null);
LogResolver = __decorate([
    graphql_1.Resolver(),
    __metadata("design:paramtypes", [log_service_1.LogService])
], LogResolver);
exports.LogResolver = LogResolver;
//# sourceMappingURL=log.resolver.js.map