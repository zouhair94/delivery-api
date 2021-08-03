import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { User } from '../user/user.schema';

export type AdressDocument = Adress & Document;
import * as mongoose from 'mongoose';

@InputType('UserIn')
class UserIn{
  @Field(() => String)
  _id: mongoose.Schema.Types.ObjectId
}
@ObjectType()
@Schema({ versionKey: false, timestamps: true })
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

  @Field(() => User)
  @Prop({type: mongoose.Schema.Types.ObjectId, ref: User.name, required: true })
  by: UserIn | User;

  @Field()
  createdAt: string;

}

export const adressSchema = SchemaFactory.createForClass(Adress);
