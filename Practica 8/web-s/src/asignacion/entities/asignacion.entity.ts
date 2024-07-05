
import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity({ name: 'Asignacion' })
export class Asignacion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  serieId: number;

  @Column()
  personajeId: number;

  @Column()
  papel: string;

  @Column()
  tipoPapel: string;

  @Column({ type: 'timestamp' })
  fechaInicio: Date;

  @Column({ type: 'timestamp' })
  fechaFin: Date;

  @Column()
  temporadas: number;

  @Column({ default: 'Activo' })
  estado: string;

}
