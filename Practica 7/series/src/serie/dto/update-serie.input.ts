import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsInt } from 'class-validator';
import { CreateSerieInput } from './create-serie.input';

@InputType()
export class UpdateSerieInput extends PartialType(CreateSerieInput) {
  @Field(() => Int)
  @IsInt()
  id: number;
}