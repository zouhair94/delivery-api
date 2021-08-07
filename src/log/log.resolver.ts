import { UseGuards } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { GqlAuthGuard } from '../user/user.guard';
import { GraphQLError } from 'graphql';
import { Log } from './log.schema';
import { LogService } from './log.service';

@Resolver()
export class LogResolver {

    constructor(private LogServ: LogService) { }


    @Query(() => [Log])
    @UseGuards(GqlAuthGuard)
    async getLogs(@Args({ name: 'skip', nullable: true }) skip?: number) {
        try {
            return await this.LogServ.getLog(skip);
        } catch (error) {
            return new GraphQLError(error);
        }

    }

}
