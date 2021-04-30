import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  OneToMany,
  JoinTable,
} from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';

import { User } from '../../users/models/user.model';

@ObjectType()
@Entity('dialogs')
export class Dialog {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ length: 255 })
  name: string;

  @Field()
  @Column({ type: 'text', nullable: true })
  picture: string;

  @Field()
  @Column({
    type: 'timestamp with time zone',
    name: 'created_at',
    default: 'now()',
  })
  public createdAt: Date;

  @Field(() => User)
  @ManyToMany((type) => User, (user) => user.dialogs)
  @JoinTable()
  users: User[];

  // @Expose()
  // @Type(() => Message)
  // @OneToMany(type => Message, message => message.dialog)
  // messages: Message[];
}
