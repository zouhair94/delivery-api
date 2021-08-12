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
exports.updateUserDto = exports.UpdateUserDto = exports.InputUserDto = void 0;
const graphql_1 = require("@nestjs/graphql");
let InputUserDto = class InputUserDto {
    constructor() {
        this.credit = 30;
    }
};
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], InputUserDto.prototype, "name", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], InputUserDto.prototype, "surname", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], InputUserDto.prototype, "email", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], InputUserDto.prototype, "password", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], InputUserDto.prototype, "phone", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], InputUserDto.prototype, "role", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], InputUserDto.prototype, "companyId", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", Number)
], InputUserDto.prototype, "credit", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], InputUserDto.prototype, "token", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], InputUserDto.prototype, "createdAt", void 0);
InputUserDto = __decorate([
    graphql_1.InputType()
], InputUserDto);
exports.InputUserDto = InputUserDto;
let UpdateUserDto = class UpdateUserDto {
};
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "name", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "surname", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "email", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "phone", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "role", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "companyId", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", Number)
], UpdateUserDto.prototype, "credit", void 0);
UpdateUserDto = __decorate([
    graphql_1.InputType()
], UpdateUserDto);
exports.UpdateUserDto = UpdateUserDto;
class updateUserDto extends graphql_1.PartialType(graphql_1.OmitType(InputUserDto, ['createdAt', 'password'])) {
    constructor() {
        super(...arguments);
        this.updatedAt = new Date().toISOString();
    }
}
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], updateUserDto.prototype, "updatedAt", void 0);
exports.updateUserDto = updateUserDto;
//# sourceMappingURL=inputs-user.dto.js.map