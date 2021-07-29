import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GqlAuthGuard } from '../user/user.guard';
import { DeliverySta } from './delivery-status.schema';
import { DeliveryStatusService } from './delivery-status.service';
import { StatusInp } from './status.dto'

@Resolver(() => DeliverySta)
export class DeliveryStatusResolver {

    constructor(
        private status: DeliveryStatusService
    ){}

    @Query(() => DeliverySta)
    @UseGuards(GqlAuthGuard)
    async getStatus(@Args('id') id: string) {
        return await this.status.getDeliveryStatus(id);
    }

    @Mutation(() => DeliverySta )
    @UseGuards(GqlAuthGuard)
    async setStatus(@Args('StatusInp') data: StatusInp){
        return await this.status.CreateStatus(data);
    }

    @Mutation(() => DeliverySta )
    @UseGuards(GqlAuthGuard)
    async updateStatus(@Args('id') id: string, status: boolean){
        return await this.status.updateStatus(id, status);
    }
    

}
