"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModule = void 0;
const common_1 = require("@nestjs/common");
const order_service_1 = require("./order.service");
const order_resolver_1 = require("./order.resolver");
const mongoose_1 = require("@nestjs/mongoose");
const order_schema_1 = require("./order.schema");
const user_schema_1 = require("../user/user.schema");
const adress_schema_1 = require("../adress/adress.schema");
let OrderModule = class OrderModule {
};
OrderModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeatureAsync([
                {
                    name: order_schema_1.Order.name,
                    useFactory: () => {
                        const schema = order_schema_1.OrderSchema;
                        return schema;
                    },
                },
                {
                    name: user_schema_1.User.name,
                    useFactory: () => {
                        const schema = user_schema_1.userSchema;
                        return schema;
                    },
                }, {
                    name: adress_schema_1.Adress.name,
                    useFactory: () => {
                        const schema = adress_schema_1.adressSchema;
                        return schema;
                    },
                }
            ]),
        ],
        controllers: [],
        providers: [order_service_1.OrderService, order_resolver_1.OrderResolver],
        exports: [order_resolver_1.OrderResolver, order_service_1.OrderService],
    })
], OrderModule);
exports.OrderModule = OrderModule;
//# sourceMappingURL=order.module.js.map