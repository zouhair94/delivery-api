import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import * as mongoose from 'mongoose';
import { Adress } from '../adress/adress.schema';

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

  @Field(() => Adress, { nullable: false })
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Address' , required: true })
  from: Adress;

  @Field(() => Adress, { nullable: false })
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Address', required: true })
  to: Adress;
  
  @Field({ nullable: false })
  @Prop({ required: true })
  orderNumber: number;

  @Field(() => String, { nullable: false })
  @Prop({ required: true })
  by: Types.ObjectId;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
