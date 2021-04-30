import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { User } from './models/user.model';
import { Dialog } from '../dialogs/models/dialog.model';

@Module({
  imports: [TypeOrmModule.forFeature([User, Dialog])],
  providers: [UsersService, UsersResolver],
})
export class UsersModule {}
