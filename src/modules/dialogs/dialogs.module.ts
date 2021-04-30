import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Dialog } from './models/dialog.model';
import { DialogsService } from './dialogs.service';
import { User } from '../users/models/user.model';
import { DialogsResolver } from './dialogs.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([User, Dialog])],
  providers: [DialogsService, DialogsResolver],
})
export class DialogsModule {}
