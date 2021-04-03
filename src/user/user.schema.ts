import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type UserDocument = User & Document;

@ObjectType()
@Schema()
export class User {
  @Field(() => String)
  @Prop()
  _id: Types.ObjectId;

  @Field({ nullable: false })
  @Prop({ required: true })
  name: string;

  @Field({ nullable: false })
  @Prop({ required: true })
  surname: string;

  @Field({ nullable: false })
  @Prop({ required: true })
  email: string;

  @Field({ nullable: false })
  @Prop({ required: true })
  password: string;

  @Field({ nullable: false })
  @Prop({ required: true })
  phone: string;

  @Field({ nullable: false })
  @Prop({ required: true })
  role: string;

  @Field({ nullable: true })
  @Prop()
  token: string;
}

export const userSchema = SchemaFactory.createForClass(User);
