import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type LocationDocument = Location & Document;

@ObjectType()
@Schema()
export class Location {
  @Field(() => String)
  _id: Types.ObjectId;

  @Field({ nullable: false })
  @Prop({ required: true })
  lat: string;

  @Field({ nullable: false })
  @Prop({ required: true })
  lng: string;

  @Field(() => String, { nullable: false })
  @Prop({ required: true })
  by: Types.ObjectId;

  @Field(() => String, { nullable: false })
  @Prop({ required: true })
  createdAt: string;
}

export const locationSchema = SchemaFactory.createForClass(Location);
