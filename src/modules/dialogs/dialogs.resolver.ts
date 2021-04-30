import {
  Args,
  Query,
  Resolver,
} from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';

import { DialogsService } from './dialogs.service';
import { Dialog } from './models/dialog.model';
import { ParseIntPipe } from '@nestjs/common';

const pubSub = new PubSub();

@Resolver(() => Dialog)
export class DialogsResolver {
  constructor(private readonly dialogsService: DialogsService) {}

  @Query(() => [Dialog])
  async dialogs(): Promise<Dialog[]> {
    return await this.dialogsService.findAll();
  }

  @Query(() => Dialog)
  async dialog(
    @Args('id', ParseIntPipe)
    id: number,
  ): Promise<Dialog> {
    return await this.dialogsService.getDialog(id);
  }

  // @Mutation(() => User)
  // async addUser(
  //   @Args('newUserInput') newUserInput: NewUserInput,
  // ): Promise<User> {
  //   const user = await this.userService.create(newUserInput);
  //   pubSub.publish('userCreated', { userCreated: user });
  //   return user;
  // }
  //
  // @Subscription(() => User)
  // userCreated() {
  //   return pubSub.asyncIterator('userCreated');
  // }
}
