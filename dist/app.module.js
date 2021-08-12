"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const graphql_1 = require("@nestjs/graphql");
const mongoose_1 = require("@nestjs/mongoose");
const user_module_1 = require("./user/user.module");
const adress_module_1 = require("./adress/adress.module");
const delivery_module_1 = require("./delivery/delivery.module");
const location_module_1 = require("./location/location.module");
const path_1 = require("path");
const log_module_1 = require("./log/log.module");
const order_module_1 = require("./order/order.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            graphql_1.GraphQLModule.forRoot({
                autoSchemaFile: path_1.join(process.cwd(), 'src/schema.gql'),
                debug: true,
                playground: true,
            }),
            mongoose_1.MongooseModule.forRoot('mongodb://root:R007P4ss@delivery-db:27017/delivery?authSource=admin&readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false'),
            user_module_1.UserModule,
            adress_module_1.AdressModule,
            delivery_module_1.DeliveryModule,
            location_module_1.LocationModule,
            log_module_1.LogModule,
            order_module_1.OrderModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map