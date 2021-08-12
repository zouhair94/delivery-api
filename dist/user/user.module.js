"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const user_resolver_1 = require("./user.resolver");
const mongoose_1 = require("@nestjs/mongoose");
const user_schema_1 = require("./user.schema");
const jwt_strategy_1 = require("./jwt.strategy");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
let UserModule = class UserModule {
};
UserModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeatureAsync([
                {
                    name: user_schema_1.User.name,
                    useFactory: () => {
                        const schema = user_schema_1.userSchema;
                        return schema;
                    },
                },
            ]),
            passport_1.PassportModule,
            jwt_1.JwtModule.register({
                secret: '3x7r4s3cre7',
                signOptions: { expiresIn: '2days' },
            }),
        ],
        providers: [user_service_1.UserService, user_resolver_1.UserResolver, jwt_strategy_1.JwtStrategy],
        exports: [jwt_1.JwtModule, user_service_1.UserService, user_resolver_1.UserResolver],
    })
], UserModule);
exports.UserModule = UserModule;
//# sourceMappingURL=user.module.js.map