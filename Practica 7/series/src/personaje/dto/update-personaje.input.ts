import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsInt } from 'class-validator';
import { CreatePersonajeInput } from './create-personaje.input';

@InputType()
export class UpdatePersonajeInput extends PartialType(CreatePersonajeInput) {
  @Field(() => Int)
  @IsInt()
  id: number;
}