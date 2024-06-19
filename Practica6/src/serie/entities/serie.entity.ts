import { Asignacion } from 'src/asignacion/entities/asignacion.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from 'typeorm';

@Entity({name:'Serie'})
export class Serie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  clasificacion: string;

  @OneToMany(() => Asignacion, asignacion => asignacion.serie)
  asignaciones: Asignacion[];

  @Column({ default: 'Activo' })
  estado: string;
}
