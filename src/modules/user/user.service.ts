import { Injectable } from '@nestjs/common';

import { User } from './models/user.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { NewUserInput } from './dto/new-user.input';

@Injectable()
export class UserService {
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
    return this.userRepository.find();
    // return this.user;
  }
}
