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
exports.UpdateOrderDto = exports.inputOrderDto = void 0;
const graphql_1 = require("@nestjs/graphql");
let inputOrderDto = class inputOrderDto {
    constructor() {
        this.orderNumber = Math.floor(1000 + Math.random() * 9000);
        this.status = 'inactive';
    }
};
__decorate([
    graphql_1.Field({}),
    __metadata("design:type", String)
], inputOrderDto.prototype, "title", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], inputOrderDto.prototype, "description", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], inputOrderDto.prototype, "from", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], inputOrderDto.prototype, "to", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", Number)
], inputOrderDto.prototype, "orderNumber", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], inputOrderDto.prototype, "by", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], inputOrderDto.prototype, "delivery", void 0);
__decorate([
    graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], inputOrderDto.prototype, "status", void 0);
inputOrderDto = __decorate([
    graphql_1.InputType()
], inputOrderDto);
exports.inputOrderDto = inputOrderDto;
let UpdateOrderDto = class UpdateOrderDto {
    constructor() {
        this.status = 'inactive';
    }
};
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], UpdateOrderDto.prototype, "delivery", void 0);
__decorate([
    graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], UpdateOrderDto.prototype, "status", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", Number)
], UpdateOrderDto.prototype, "orderNumber", void 0);
UpdateOrderDto = __decorate([
    graphql_1.InputType()
], UpdateOrderDto);
exports.UpdateOrderDto = UpdateOrderDto;
//# sourceMappingURL=order.dto.js.map