import { Field, InputType, OmitType, PartialType } from '@nestjs/graphql';

@InputType()
export class StatusInp {
    @Field()
    delivery: string;
    @Field()
    status: boolean
}