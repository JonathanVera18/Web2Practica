import { Asignacion } from 'src/asignacion/entities/asignacion.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType() 
@Entity({name:'Personaje'})
export class Personaje {
  @PrimaryGeneratedColumn()
  @Field(() => Int) // Añade un campo GraphQL para el ID
  id: number;

  @Column()
  @Field() // Añade un campo GraphQL para el nombre
  nombre: string;

  @Column()
  @Field(() => Int) // Añade un campo GraphQL para los años de experiencia
  anosExperiencia: number;

  @OneToMany(() => Asignacion, (asignacion) => asignacion.personaje)
  asignaciones: Asignacion[];

  @Column({ default: 'Activo' })
  @Field() // Añade un campo GraphQL para el estado
  estado: string;
}
