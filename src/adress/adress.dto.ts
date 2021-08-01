
import { Field, InputType, ObjectType, OmitType, PartialType } from '@nestjs/graphql';
import { ObjectId } from 'mongoose';
import * as mongoose from 'mongoose';
import { User } from 'src/user/user.schema';

@InputType('UserIn')
class UserIn{
  @Field(() => String)
  _id: mongoose.Schema.Types.ObjectId
}

@InputType('inputAddress')
export class inputAddress {

  @Field()
  title: string;

  @Field()
  address: string;

  @Field(type => UserIn,{ nullable: true })
  by: UserIn;

  @Field({ nullable: true })
  zipCode?: number;

  @Field({ nullable: true })
  lat?: string;

  @Field({ nullable: true })
  lng?: string;

}


@InputType('UpdateAddress')
export class UpdateAddress {

  @Field({ nullable: true })
  title: string;

  @Field({ nullable: true })
  address: string;

  @Field({ nullable: true })
  lat?: string;

  @Field({ nullable: true })
  lng?: string;

}





