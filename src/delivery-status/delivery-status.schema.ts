import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type DeliveryStatusDocument = DeliverySta & Document;

@ObjectType()
@Schema()
export class DeliverySta {
  @Field(() => String)
  _id: Types.ObjectId;

  @Field(() => String, { nullable: false })
  @Prop({ required: true })
  delivery: Types.ObjectId;

  @Field({ nullable: false })
  @Prop({ required: true })
  status: boolean;
}

export const DeliveryStatusSchema = SchemaFactory.createForClass(DeliverySta);
