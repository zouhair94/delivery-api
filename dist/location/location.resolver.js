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
exports.LocationResolver = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const user_guard_1 = require("../user/user.guard");
const location_dto_1 = require("./location.dto");
const location_schema_1 = require("./location.schema");
const location_service_1 = require("./location.service");
let LocationResolver = class LocationResolver {
    constructor(LocationServ) {
        this.LocationServ = LocationServ;
    }
    async getLocation(id) {
        return await this.LocationServ.getLocationByUserId(id);
    }
    async getLocations(id) {
        return await this.LocationServ.getLocationsByUserId(id);
    }
    async addLocation(locationInput) {
        return await this.LocationServ.addLocation(locationInput);
    }
};
__decorate([
    graphql_1.Query(() => location_schema_1.Location),
    common_1.UseGuards(user_guard_1.GqlAuthGuard),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LocationResolver.prototype, "getLocation", null);
__decorate([
    graphql_1.Query(() => [location_schema_1.Location]),
    common_1.UseGuards(user_guard_1.GqlAuthGuard),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LocationResolver.prototype, "getLocations", null);
__decorate([
    graphql_1.Mutation(() => location_schema_1.Location),
    common_1.UseGuards(user_guard_1.GqlAuthGuard),
    __param(0, graphql_1.Args('inputLocation')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [location_dto_1.inputLocation]),
    __metadata("design:returntype", Promise)
], LocationResolver.prototype, "addLocation", null);
LocationResolver = __decorate([
    graphql_1.Resolver(() => location_schema_1.Location),
    __metadata("design:paramtypes", [location_service_1.LocationService])
], LocationResolver);
exports.LocationResolver = LocationResolver;
//# sourceMappingURL=location.resolver.js.map