import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DeliveryStatusService } from './delivery-status.service';
import { DeliverySta,DeliveryStatusSchema } from './delivery-status.schema'
import { DeliveryStatusResolver } from './delivery-status.resolver';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: DeliverySta.name,
        useFactory: () => {
          const schema = DeliveryStatusSchema;
          return schema;
        },
      },
    ]),
  ],
  providers: [DeliveryStatusService, DeliveryStatusResolver],
  exports: [DeliveryStatusResolver]
})
export class DeliveryStatusModule {}
