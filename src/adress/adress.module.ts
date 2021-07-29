import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AdressService } from './adress.service';
import { Adress, adressSchema } from './adress.schema';
import { AddressResolver } from './adress.resolver';
@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: Adress.name,
        useFactory: () => {
          const schema = adressSchema;
          return schema;
        },
      },
    ]),
  ],
  controllers: [],
  providers: [AdressService, AddressResolver],
  exports: [AddressResolver],
})
export class AdressModule {}
