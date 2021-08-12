"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogModule = void 0;
const common_1 = require("@nestjs/common");
const log_service_1 = require("./log.service");
const log_resolver_1 = require("./log.resolver");
const mongoose_1 = require("@nestjs/mongoose");
const log_schema_1 = require("./log.schema");
let LogModule = class LogModule {
};
LogModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeatureAsync([
                {
                    name: log_schema_1.Log.name,
                    useFactory: () => {
                        const schema = log_schema_1.LogSchema;
                        return schema;
                    },
                }
            ])
        ],
        providers: [log_service_1.LogService, log_resolver_1.LogResolver],
        exports: [log_service_1.LogService, log_resolver_1.LogResolver],
    })
], LogModule);
exports.LogModule = LogModule;
//# sourceMappingURL=log.module.js.map