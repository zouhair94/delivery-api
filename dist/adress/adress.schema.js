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
exports.adressSchema = exports.Adress = void 0;
const graphql_1 = require("@nestjs/graphql");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_schema_1 = require("../user/user.schema");
const mongoose = require("mongoose");
let UserIn = class UserIn {
};
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", mongoose.Schema.Types.ObjectId)
], UserIn.prototype, "_id", void 0);
UserIn = __decorate([
    graphql_1.InputType('UserIn')
], UserIn);
let Adress = class Adress {
};
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Adress.prototype, "_id", void 0);
__decorate([
    graphql_1.Field({ nullable: false }),
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", String)
], Adress.prototype, "title", void 0);
__decorate([
    graphql_1.Field({ nullable: false }),
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", String)
], Adress.prototype, "address", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    mongoose_1.Prop({ required: false }),
    __metadata("design:type", String)
], Adress.prototype, "zipCode", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    mongoose_1.Prop({ required: false }),
    __metadata("design:type", String)
], Adress.prototype, "lat", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    mongoose_1.Prop({ required: false }),
    __metadata("design:type", String)
], Adress.prototype, "lng", void 0);
__decorate([
    graphql_1.Field(() => user_schema_1.User),
    mongoose_1.Prop({ type: mongoose.Schema.Types.ObjectId, ref: user_schema_1.User.name, required: true }),
    __metadata("design:type", Object)
], Adress.prototype, "by", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], Adress.prototype, "createdAt", void 0);
Adress = __decorate([
    graphql_1.ObjectType(),
    mongoose_1.Schema({ versionKey: false, timestamps: true })
], Adress);
exports.Adress = Adress;
exports.adressSchema = mongoose_1.SchemaFactory.createForClass(Adress);
//# sourceMappingURL=adress.schema.js.map