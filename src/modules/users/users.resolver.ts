import {
  Args,
  Mutation,
  Query,
  Resolver,
  Subscription,
  Context,
} from '@nestjs/graphql';

import { PubSub } from 'graphql-subscriptions';
import { UsersService } from './users.service';
import { User } from './models/user.model';
import { NewUserInput } from './dto/new-user.input';
import { ParseIntPipe } from '@nestjs/common';

const pubSub = new PubSub();

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly userService: UsersService) {}

  @Query(() => [User])
  async users(): Promise<User[]> {
    return await this.userService.findAll();
  }

  @Query(() => User)
  async user(
    @Args('id', ParseIntPipe)
    id: number,
  ): Promise<User> {
    return await this.userService.getUser(id);
  }

  @Query(() => User)
  currentUser(@Context() context): Promise<User> {
    const { session } = context.req;
    return session.user;
  }

  @Mutation(() => User)
  async addUser(
    @Args('newUserInput') newUserInput: NewUserInput,
  ): Promise<User> {
    const user = await this.userService.create(newUserInput);
    pubSub.publish('userCreated', { userCreated: user });
    return user;
  }

  @Subscription(() => User)
  userCreated() {
    return pubSub.asyncIterator('userCreated');
  }
}
