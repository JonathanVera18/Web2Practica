import { IsInt, IsString, IsDate, Min, MaxLength, IsOptional } from 'class-validator';

export class CreateSerieDto {
    @IsString()
    @MaxLength(255)
    nombre: string;
  
    @IsString()
    @MaxLength(255)
    clasificacion: string;
  
    @IsString()
    @IsOptional()
    estado?: string = 'Activo';
  }
  