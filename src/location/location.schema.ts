import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import * as mongoose from 'mongoose';
import { User } from '../user/user.schema';

export type LocationDocument = Location & Document;

@ObjectType()
@Schema({ versionKey: false, timestamps: true })
export class Location {
  @Field(() => String)
  _id: Types.ObjectId;

  @Field({ nullable: false })
  @Prop({ required: true })
  lat: string;

  @Field({ nullable: false })
  @Prop({ required: true })
  lng: string;

  @Field(() => User, { nullable: false })
  @Prop({type: mongoose.Schema.Types.ObjectId, ref: User.name, required: false })
  by: User;

}

export const locationSchema = SchemaFactory.createForClass(Location);
