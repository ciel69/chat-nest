import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Dialog } from './models/dialog.model';

@Injectable()
export class DialogsService {
  user = [];

  constructor(
    @InjectRepository(Dialog)
    private readonly dialogsRepository: Repository<Dialog>,
  ) {}

  async findAll(): Promise<Dialog[]> {
    return this.dialogsRepository.find();
    // return this.user;
  }

  async getDialog(id): Promise<Dialog> {
    return this.dialogsRepository.findOne(id);
    // return this.user;
  }
}
