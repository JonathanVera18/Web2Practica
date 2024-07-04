import { Asignacion } from "src/asignacion/entities/asignacion.entity";

// Personaje.ts
export class CreatePersonajeDto {
    id: number;
    nombre: string;
    anosExperiencia: number;
    estado: string;
    asignaciones: Asignacion[]; // Añade el atributo para las asignaciones
  }
  