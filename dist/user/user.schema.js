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
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = exports.User = void 0;
const graphql_1 = require("@nestjs/graphql");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let User = class User {
};
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], User.prototype, "_id", void 0);
__decorate([
    graphql_1.Field({ nullable: false }),
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    graphql_1.Field({ nullable: false }),
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", String)
], User.prototype, "surname", void 0);
__decorate([
    graphql_1.Field({ nullable: false }),
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    mongoose_1.Prop({ required: false }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    graphql_1.Field({ nullable: false }),
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", String)
], User.prototype, "phone", void 0);
__decorate([
    graphql_1.Field({ nullable: false }),
    mongoose_1.Prop({ required: false }),
    __metadata("design:type", String)
], User.prototype, "companyId", void 0);
__decorate([
    graphql_1.Field({ nullable: false }),
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", String)
], User.prototype, "role", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], User.prototype, "credit", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    mongoose_1.Prop(),
    __metadata("design:type", String)
], User.prototype, "token", void 0);
User = __decorate([
    graphql_1.InputType('UserInput'),
    graphql_1.ObjectType(),
    mongoose_1.Schema({ versionKey: false, timestamps: true })
], User);
exports.User = User;
exports.userSchema = mongoose_1.SchemaFactory.createForClass(User);
//# sourceMappingURL=user.schema.js.map