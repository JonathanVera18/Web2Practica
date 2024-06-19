import { Asignacion } from 'src/asignacion/entities/asignacion.entity';
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
    ManyToOne,
    JoinColumn
  } from 'typeorm';
@Entity({name:'Personaje'})
export class Personaje {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  anosExperiencia: number;

  @OneToMany(() => Asignacion, asignacion => asignacion.personaje)
  asignaciones: Asignacion[];

  @Column({ default: 'Activo' })
  estado: string;
}