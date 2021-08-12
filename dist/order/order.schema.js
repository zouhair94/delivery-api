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
exports.OrderSchema = exports.Order = void 0;
const graphql_1 = require("@nestjs/graphql");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const mongoose = require("mongoose");
const adress_schema_1 = require("../adress/adress.schema");
const user_schema_1 = require("../user/user.schema");
let Order = class Order {
    constructor() {
        this.status = 'inactive';
    }
};
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Order.prototype, "_id", void 0);
__decorate([
    graphql_1.Field({ nullable: false }),
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", String)
], Order.prototype, "title", void 0);
__decorate([
    graphql_1.Field({ nullable: false }),
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", String)
], Order.prototype, "description", void 0);
__decorate([
    graphql_1.Field(() => adress_schema_1.Adress, { nullable: false }),
    mongoose_1.Prop({ type: mongoose.Schema.Types.ObjectId, ref: adress_schema_1.Adress.name, required: true }),
    __metadata("design:type", adress_schema_1.Adress)
], Order.prototype, "from", void 0);
__decorate([
    graphql_1.Field(() => adress_schema_1.Adress, { nullable: false }),
    mongoose_1.Prop({ type: mongoose.Schema.Types.ObjectId, ref: adress_schema_1.Adress.name, required: true }),
    __metadata("design:type", adress_schema_1.Adress)
], Order.prototype, "to", void 0);
__decorate([
    graphql_1.Field({ nullable: false }),
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", Number)
], Order.prototype, "orderNumber", void 0);
__decorate([
    graphql_1.Field(() => user_schema_1.User, { nullable: false }),
    mongoose_1.Prop({ type: mongoose.Schema.Types.ObjectId, ref: user_schema_1.User.name, required: true }),
    __metadata("design:type", user_schema_1.User)
], Order.prototype, "by", void 0);
__decorate([
    graphql_1.Field(() => user_schema_1.User, { nullable: true }),
    mongoose_1.Prop({ type: mongoose.Schema.Types.ObjectId, ref: user_schema_1.User.name, required: false }),
    __metadata("design:type", user_schema_1.User)
], Order.prototype, "delivery", void 0);
__decorate([
    graphql_1.Field(() => String, { nullable: true }),
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Order.prototype, "status", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], Order.prototype, "createdAt", void 0);
Order = __decorate([
    graphql_1.ObjectType(),
    mongoose_1.Schema({ versionKey: false, timestamps: true })
], Order);
exports.Order = Order;
exports.OrderSchema = mongoose_1.SchemaFactory.createForClass(Order);
//# sourceMappingURL=order.schema.js.map