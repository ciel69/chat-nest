import {
  Args,
  Mutation,
  Query,
  Resolver,
  Subscription,
  Context,
} from '@nestjs/graphql';

import { PubSub } from 'graphql-subscriptions';
import { UserService } from './user.service';
import { User } from './models/user.model';
import { NewUserInput } from './dto/new-user.input';

const pubSub = new PubSub();

@Resolver(() => User)
export class UserResolvers {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User])
  async allUsers(): Promise<User[]> {
    return await this.userService.findAll();
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
