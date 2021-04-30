import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from './models/user.model';

import { NewUserInput } from './dto/new-user.input';

@Injectable()
export class UsersService {
  user = [];

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(data: NewUserInput): Promise<User> {
    this.user.push(data);
    return data as any;
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find({ relations: ['dialogs'] });
  }

  async getUser(id): Promise<User> {
    return this.userRepository.findOne(id, { relations: ['dialogs'] });
  }
}
