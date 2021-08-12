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
exports.UpdateAddress = exports.inputAddress = void 0;
const graphql_1 = require("@nestjs/graphql");
const mongoose = require("mongoose");
const user_schema_1 = require("../user/user.schema");
let UserIn = class UserIn {
};
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", mongoose.Schema.Types.ObjectId)
], UserIn.prototype, "_id", void 0);
UserIn = __decorate([
    graphql_1.InputType('UserIn')
], UserIn);
let inputAddress = class inputAddress {
};
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], inputAddress.prototype, "title", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], inputAddress.prototype, "address", void 0);
__decorate([
    graphql_1.Field(type => UserIn, { nullable: true }),
    __metadata("design:type", UserIn)
], inputAddress.prototype, "by", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", Number)
], inputAddress.prototype, "zipCode", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], inputAddress.prototype, "lat", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], inputAddress.prototype, "lng", void 0);
inputAddress = __decorate([
    graphql_1.InputType('inputAddress')
], inputAddress);
exports.inputAddress = inputAddress;
let UpdateAddress = class UpdateAddress {
};
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], UpdateAddress.prototype, "title", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], UpdateAddress.prototype, "address", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], UpdateAddress.prototype, "lat", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], UpdateAddress.prototype, "lng", void 0);
UpdateAddress = __decorate([
    graphql_1.InputType('UpdateAddress')
], UpdateAddress);
exports.UpdateAddress = UpdateAddress;
//# sourceMappingURL=adress.dto.js.map