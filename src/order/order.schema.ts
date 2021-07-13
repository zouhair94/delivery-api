import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type OrderDocument = Order & Document;

@ObjectType()
@Schema()
export class Order {
  @Field(() => String)
  _id: Types.ObjectId;

  @Field({ nullable: false })
  @Prop({ required: true })
  title: string;

  @Field({ nullable: false })
  @Prop({ required: true })
  description: string;

  @Field({ nullable: false })
  @Prop({ required: true })
  from: Types.ObjectId;

  @Field({ nullable: false })
  @Prop({ required: true })
  to: Types.ObjectId;
  
  @Field({ nullable: false })
  @Prop({ required: true })
  orderNumber: number;

  @Field({ nullable: false })
  @Prop({ required: true })
  by: Types.ObjectId;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
