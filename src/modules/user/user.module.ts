import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { UserResolvers } from './user.resolvers';
import { User } from './models/user.model';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserService, UserResolvers],
})
export class UserModule {}
