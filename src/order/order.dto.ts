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
  @Field({ nullable: true })
  delivery: string;
  @Field(() => String, { nullable: true })
  status: string = 'inactive';
}
@InputType()
export class UpdateOrderDto {
  @Field({ nullable: true })
  delivery: string;
  @Field(() => String, { nullable: true })
  status: string = 'inactive';
}
