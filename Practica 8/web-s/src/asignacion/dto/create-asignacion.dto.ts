export class CreateAsignacionDto {
    serieId: number;
    personajeId: number;
    papel: string;
    tipoPapel: string;
    fechaInicio: Date;
    fechaFin: Date;
    temporadas: number;
    estado?: string;
  }
  