import { Field, InputType, Int } from '@nestjs/graphql';
import { IsInt, IsString, IsDate, MaxLength, IsOptional } from 'class-validator';

@InputType()
export class CreateAsignacionInput {
  @Field(() => Int)
  @IsInt()
  serieId: number;

  @Field(() => Int)
  @IsInt()
  personajeId: number;

  @Field()
  @IsString()
  @MaxLength(255)
  papel: string;

  @Field()
  @IsString()
  @MaxLength(255)
  tipoPapel: string;

  @Field()
  @IsDate()
  fechaInicio: Date;

  @Field()
  @IsDate()
  fechaFin: Date;

  @Field(() => Int)
  @IsInt()
  temporadas: number;

  @Field({ nullable: true, defaultValue: 'Activo' })
  @IsString()
  @IsOptional()
  estado?: string;
}