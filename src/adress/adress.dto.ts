import { Field, InputType, OmitType, PartialType } from '@nestjs/graphql';

@InputType()
export class inputAddress {
  @Field()
  title: string;
  @Field()
  address: string;
  @Field({ nullable: true })
  zipCode?: number;
  @Field({ nullable: true })
  lat?: number;
  @Field({ nullable: true })
  lng?: number;
}
