import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
