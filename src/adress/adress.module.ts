import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AdressService } from './adress.service';
import { Adress, adressSchema } from './adress.schema';
import { AddressResolver } from './adress.resolver';
import { User, userSchema } from '../user/user.schema';
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
      {
        name: User.name,
        useFactory: () => {
          const schema = userSchema;
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
