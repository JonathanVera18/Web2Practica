import { Field, InputType } from '@nestjs/graphql';
import { IsString, MaxLength, IsOptional } from 'class-validator';

@InputType()
export class CreateSerieInput {
  @Field()
  @IsString()
  @MaxLength(255)
  nombre: string;

  @Field()
  @IsString()
  @MaxLength(255)
  clasificacion: string;

  @Field({ nullable: true, defaultValue: 'Activo' })
  @IsString()
  @IsOptional()
  estado?: string;
}