import { Field, InputType, OmitType, PartialType } from '@nestjs/graphql';

@InputType()
export class inputOrderDto {
  @Field({})
  title: string;
  @Field()
  description: string;
  @Field()
  from: string;
  @Field()
  to: string;
  @Field()
  orderNumber?: number;
  @Field()
  by: string;
  @Field()
  createdAt?: string;
  @Field()
  editedAt?: string;
}
