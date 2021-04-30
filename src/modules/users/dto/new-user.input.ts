import { Field, InputType } from '@nestjs/graphql';
import { IsOptional, Length, MaxLength } from 'class-validator';

@InputType()
export class NewUserInput {
  @Field()
  @MaxLength(30)
  login: string;

  @Field({ nullable: true })
  @IsOptional()
  @Length(30, 255)
  email?: string;

  @Field({ nullable: true })
  @IsOptional()
  @Length(30, 255)
  firstName?: string;
}
