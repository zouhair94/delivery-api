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
exports.locationSchema = exports.Location = void 0;
const graphql_1 = require("@nestjs/graphql");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const mongoose = require("mongoose");
const user_schema_1 = require("../user/user.schema");
let Location = class Location {
};
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Location.prototype, "_id", void 0);
__decorate([
    graphql_1.Field({ nullable: false }),
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", String)
], Location.prototype, "lat", void 0);
__decorate([
    graphql_1.Field({ nullable: false }),
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", String)
], Location.prototype, "lng", void 0);
__decorate([
    graphql_1.Field(() => user_schema_1.User, { nullable: false }),
    mongoose_1.Prop({ type: mongoose.Schema.Types.ObjectId, ref: user_schema_1.User.name, required: false }),
    __metadata("design:type", user_schema_1.User)
], Location.prototype, "by", void 0);
Location = __decorate([
    graphql_1.ObjectType(),
    mongoose_1.Schema({ versionKey: false, timestamps: true })
], Location);
exports.Location = Location;
exports.locationSchema = mongoose_1.SchemaFactory.createForClass(Location);
//# sourceMappingURL=location.schema.js.map