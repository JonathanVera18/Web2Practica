import { IsInt, IsString, IsDate, Min, MaxLength, IsOptional } from 'class-validator';

export class CreatePersonajeDto {
    @IsString()
    @MaxLength(255)
    nombre: string;
  
    @IsInt()
    @Min(0)
    anosExperiencia: number;
  
    @IsString()
    @IsOptional()
    estado?: string = 'Activo';
  }
  