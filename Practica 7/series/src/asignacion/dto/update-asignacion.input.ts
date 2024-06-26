import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsInt } from 'class-validator';
import { CreateAsignacionInput } from './create-asignacion.input';

@InputType()
export class UpdateAsignacionInput extends PartialType(CreateAsignacionInput) {
  @Field(() => Int)
  @IsInt()
  id: number;
}