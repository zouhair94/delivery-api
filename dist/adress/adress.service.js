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
exports.AdressService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const GraphQLError_1 = require("graphql/error/GraphQLError");
const mongoose_2 = require("mongoose");
const adress_schema_1 = require("./adress.schema");
let AdressService = class AdressService {
    constructor(Address) {
        this.Address = Address;
    }
    async getAdresses(user) {
        try {
            return await this.Address.find({ by: user }).populate('by');
        }
        catch (e) {
            new GraphQLError_1.GraphQLError(e);
        }
    }
    async getAllAdresses() {
        try {
            return await this.Address.find({}).populate('by');
        }
        catch (e) {
            new GraphQLError_1.GraphQLError(e);
        }
    }
    async getAdress(id) {
        try {
            return await this.Address.findById(id).populate('by');
        }
        catch (e) {
            new GraphQLError_1.GraphQLError(e);
        }
    }
    async createAddress(data) {
        return await this.Address.create(data);
    }
    async updateAdress(id, update) {
        try {
            return await this.Address.findByIdAndUpdate(id, update);
        }
        catch (e) {
            new GraphQLError_1.GraphQLError(e);
        }
    }
    async deleteAdress(id) {
        try {
            return await this.Address.findByIdAndRemove(id);
        }
        catch (e) {
            new GraphQLError_1.GraphQLError(e);
        }
    }
    async totalAddresses() {
        try {
            return await this.Address.count();
        }
        catch (e) {
            new GraphQLError_1.GraphQLError(e);
        }
    }
};
AdressService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(adress_schema_1.Adress.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], AdressService);
exports.AdressService = AdressService;
//# sourceMappingURL=adress.service.js.map