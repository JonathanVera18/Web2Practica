import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Asignacion } from 'src/asignacion/entities/asignacion.entity';// Asegúrate de ajustar la ruta correcta

@Entity({ name: 'Personaje' })
export class Personaje {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  anosExperiencia: number;

  @Column()
  estado: string;

  @OneToMany(() => Asignacion, (asignacion: Asignacion) => asignacion.personaje)
  asignaciones: Asignacion[]; // Añade el atributo para las asignaciones
}
