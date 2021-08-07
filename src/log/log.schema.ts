import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import * as mongoose from 'mongoose';
import { User } from '../user/user.schema';

export type LogDocument = Log & Document;


@ObjectType()
@Schema({ versionKey: false, timestamps: true })
export class Log {
  @Field(() => String)
  _id: Types.ObjectId;

  @Field({ nullable: false })
  @Prop({ required: true })
  title: string;

  @Field()
  @Prop()
  description: string;

  @Field(() => User, { nullable: false })
  @Prop({type: mongoose.Schema.Types.ObjectId, ref: User.name, required: true })
  by: User;
}


export const LogSchema = SchemaFactory.createForClass(Log);