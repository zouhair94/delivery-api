import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LocationResolver } from './location.resolver';
import { locationSchema, Location } from './location.schema';
import { LocationService } from './location.service';

@Module({
    imports: [
        MongooseModule.forFeatureAsync([
          {
            name: Location.name,
            useFactory: () => {
              const schema = locationSchema;
              return schema;
            },
          },
        ]),
      ],
      controllers: [],
      providers: [LocationService, LocationResolver],
      exports: [LocationResolver, LocationService],
})
export class LocationModule {}
