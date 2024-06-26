import { Field, InputType, Int } from '@nestjs/graphql';
import { IsInt, IsString, Min, MaxLength, IsOptional } from 'class-validator';

@InputType()
export class CreatePersonajeInput {
  @Field()
  @IsString()
  @MaxLength(255)
  nombre: string;

  @Field(() => Int)
  @IsInt()
  @Min(0)
  anosExperiencia: number;

  @Field({ nullable: true, defaultValue: 'Activo' })
  @IsString()
  @IsOptional()
  estado?: string;
}