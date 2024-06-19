import { IsInt, IsString, IsDate, Min, MaxLength, IsOptional } from 'class-validator';

export class CreateAsignacionDto {
  @IsInt()
  serieId: number;

  @IsInt()
  personajeId: number;

  @IsString()
  @MaxLength(255)
  papel: string;

  @IsString()
  @MaxLength(255)
  tipoPapel: string;

  @IsDate()
  fechaInicio: Date;

  @IsDate()
  fechaFin: Date;

  @IsInt()
  temporadas: number;

  @IsString()
  @IsOptional()
  estado?: string = 'Activo';
}
