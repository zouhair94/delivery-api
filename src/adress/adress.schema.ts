import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type AdressDocument = Adress & Document;

@ObjectType()
@Schema()
export class Adress {
  @Field(() => String)
  _id: Types.ObjectId;

  @Field({ nullable: false })
  @Prop({ required: true })
  title: string;

  @Field({ nullable: false })
  @Prop({ required: true })
  address: string;

  @Field({ nullable: true })
  @Prop({ required: false })
  zipCode: string;

  @Field({ nullable: true })
  @Prop({ required: false })
  lat: string;

  @Field({ nullable: true })
  @Prop({ required: false })
  lng: string;

  @Field({ nullable: false })
  @Prop({ required: true })
  by: Types.ObjectId;
}

export const adressSchema = SchemaFactory.createForClass(Adress);
