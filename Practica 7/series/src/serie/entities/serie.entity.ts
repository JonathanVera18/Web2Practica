import { Asignacion } from 'src/asignacion/entities/asignacion.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ObjectType, Field, Int } from '@nestjs/graphql';

@Entity({name:'Serie'})
@ObjectType() // Indicates that this class is a GraphQL type
export class Serie {
  @PrimaryGeneratedColumn()
  @Field(() => Int) // Adds a GraphQL field for the ID
  id: number;

  @Column()
  @Field() // Adds a GraphQL field for the name
  nombre: string;

  @Column()
  @Field() // Adds a GraphQL field for the classification
  clasificacion: string;

  @OneToMany(() => Asignacion, (asignacion) => asignacion.serie)
  asignaciones: Asignacion[];

  @Column({ default: 'Activo' })
  @Field() // Adds a GraphQL field for the status
  estado: string;
}
