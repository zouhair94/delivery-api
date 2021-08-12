"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdressModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const adress_service_1 = require("./adress.service");
const adress_schema_1 = require("./adress.schema");
const adress_resolver_1 = require("./adress.resolver");
const user_schema_1 = require("../user/user.schema");
let AdressModule = class AdressModule {
};
AdressModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeatureAsync([
                {
                    name: adress_schema_1.Adress.name,
                    useFactory: () => {
                        const schema = adress_schema_1.adressSchema;
                        return schema;
                    },
                },
                {
                    name: user_schema_1.User.name,
                    useFactory: () => {
                        const schema = user_schema_1.userSchema;
                        return schema;
                    },
                },
            ]),
        ],
        controllers: [],
        providers: [adress_service_1.AdressService, adress_resolver_1.AddressResolver],
        exports: [adress_resolver_1.AddressResolver],
    })
], AdressModule);
exports.AdressModule = AdressModule;
//# sourceMappingURL=adress.module.js.map