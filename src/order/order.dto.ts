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
  orderNumber?: number = Math.floor(1000 + Math.random() * 9000);
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
  @Field({ nullable: true })
  orderNumber: number;
}
