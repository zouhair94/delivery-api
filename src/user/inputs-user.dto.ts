import { Field, InputType, OmitType, PartialType } from '@nestjs/graphql';

@InputType()
export class InputUserDto {
  @Field()
  name: string;

  @Field()
  surname: string;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field()
  phone: string;

  @Field()
  role: string;

  @Field({ nullable: true })
  token: string;
  @Field()
  createdAt: string = new Date().toISOString();
}

@InputType()
export class UpdateUserDto {
  @Field({ nullable: true })
  name: string;

  @Field({ nullable: true })
  surname: string;

  @Field({ nullable: true })
  email: string;

  @Field({ nullable: true })
  phone: string;

  @Field({ nullable: true })
  role: string;

  @Field({ nullable: true })
  companyId: string;

  
}

export class updateUserDto extends PartialType(
  OmitType(InputUserDto, ['createdAt', 'password'] as const),
) {
  @Field()
  updatedAt: string = new Date().toISOString();
}
