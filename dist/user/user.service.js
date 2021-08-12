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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const user_schema_1 = require("./user.schema");
const mongoose_2 = require("mongoose");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
const graphql_1 = require("graphql");
let UserService = class UserService {
    constructor(jwtService, User) {
        this.jwtService = jwtService;
        this.User = User;
    }
    async createUser(data) {
        try {
            const isUser = await this.User.findOne({
                email: data.email,
            });
            if (isUser) {
                return new graphql_1.GraphQLError('This account already exists.');
            }
            const salt = await bcrypt.genSalt();
            data.password = await bcrypt.hash(data.password, salt).then((r) => r);
            return await new this.User(data).save();
        }
        catch (error) {
            console.error(error);
        }
    }
    async login(password, email) {
        try {
            const user = await this.User.findOne({
                email,
            });
            if (user) {
                const checkPass = await bcrypt.compare(password, user.password);
                if (checkPass) {
                    return await this.jwtService.signAsync({ email, _id: user._id });
                }
                return new graphql_1.GraphQLError('Wrong Password.');
            }
            return new graphql_1.GraphQLError("E-mail doesn't exist.");
        }
        catch (error) {
            console.error(error);
        }
    }
    async getAllDelivery() {
        try {
            return await this.User.find({ role: 'delivery' }).exec();
        }
        catch (error) {
            console.error(error);
        }
    }
    async findAll() {
        try {
            return await this.User.find({}).exec();
        }
        catch (error) {
            console.error(error);
        }
    }
    async findBySurname(surname) {
        try {
            return await this.User.find({ surname: { $regex: '.*' + surname + '.*' } }).exec();
        }
        catch (error) {
            console.error(error);
        }
    }
    async deleteUser(id) {
        try {
            return await this.User.findOneAndDelete(id);
        }
        catch (error) {
            return new graphql_1.GraphQLError("User no existing.");
        }
    }
    async userById(id) {
        return await this.User.findOne({ _id: id }).exec();
    }
    async updateUser(id, data) {
        return await this.User.findByIdAndUpdate(id, data);
    }
    async totalUsers() {
        try {
            return await this.User.count().exec();
        }
        catch (error) {
            console.log(error);
        }
    }
};
UserService = __decorate([
    common_1.Injectable(),
    __param(1, mongoose_1.InjectModel(user_schema_1.User.name)),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        mongoose_2.Model])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map