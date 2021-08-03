import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type UserDocument = User & Document;

@InputType('UserInput')
@ObjectType()
@Schema({ versionKey: false, timestamps: true })
export class User {
  @Field(() => String)
  _id: Types.ObjectId;

  @Field({ nullable: false })
  @Prop({ required: true })
  name: string;

  @Field({ nullable: false })
  @Prop({ required: true })
  surname: string;

  @Field({ nullable: false })
  @Prop({ required: true})
  email: string;

  @Field({ nullable: true })
  @Prop({ required: false })
  password: string;

  @Field({ nullable: false })
  @Prop({ required: true })
  phone: string;
  
  @Field({ nullable: false })
  @Prop({ required: false })
  companyId: string;

  @Field({ nullable: false })
  @Prop({ required: true })
  role: string;

  @Field({ nullable: true })
  @Prop()
  credit: number;

  @Field({ nullable: true })
  @Prop()
  token: string;


}

export const userSchema = SchemaFactory.createForClass(User);
