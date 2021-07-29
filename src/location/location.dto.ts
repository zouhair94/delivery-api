import { Field, InputType, OmitType, PartialType } from '@nestjs/graphql';

@InputType()
export class inputLocation {

  @Field()
  by: string;

  @Field({ nullable: false })
  lng: number;
  @Field({ nullable: false })
  lat: number;
  @Field()
  createdAt: string;

}