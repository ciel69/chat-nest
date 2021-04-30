import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Dialog } from '../../dialogs/models/dialog.model';

@ObjectType()
@Entity('users')
export class User {
  @Field((type) => ID)
  @PrimaryGeneratedColumn()
  id: string;

  @Field()
  @Column({ length: 255, unique: true })
  login: string;

  @Field()
  @Column({ length: 255, unique: true })
  email: string;

  @Field()
  @Column({ length: 255 })
  firstName: string;

  @Field()
  @Column({ length: 255, nullable: true })
  lastName: string;

  @Field()
  @Column({ length: 255, nullable: true })
  picture: string;

  @Field(() => [Dialog])
  @ManyToMany((type) => Dialog, (dialog) => dialog.users)
  dialogs: Dialog[];
}
