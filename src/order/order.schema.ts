import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import * as mongoose from 'mongoose';
import { Adress } from '../adress/adress.schema';
import { User } from '../user/user.schema';

export type OrderDocument = Order & Document;


@ObjectType()
@Schema({ versionKey: false, timestamps: true })
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
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Adress.name , required: true })
  from: Adress;

  @Field(() => Adress, { nullable: false })
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Adress.name , required: true })
  to: Adress;
  
  @Field({ nullable: false })
  @Prop({ required: true })
  orderNumber: number;

  @Field(() => User, { nullable: false })
  @Prop({type: mongoose.Schema.Types.ObjectId, ref: User.name, required: true })
  by: User;

  @Field(() => User, { nullable: true })
  @Prop({type: mongoose.Schema.Types.ObjectId, ref: User.name, required: false })
  delivery: User;

  @Field(() => String, { nullable: true })
  @Prop()
  status: string = 'inactive';

  @Field()
  createdAt: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
