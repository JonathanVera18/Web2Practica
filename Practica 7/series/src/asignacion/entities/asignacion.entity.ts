import { Personaje } from 'src/personaje/entities/personaje.entity';
import { Serie } from 'src/serie/entities/serie.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field, Int } from '@nestjs/graphql';

@Entity({name:'Asignacion'})
@ObjectType() // Indica que esta clase es un tipo GraphQL
export class Asignacion {
  @PrimaryGeneratedColumn()
  @Field(() => Int) // Añade un campo GraphQL para el ID
  id: number;

  @Column()
  @Field(() => Int) // Añade un campo GraphQL para serieId
  serieId: number;

  @Column()
  @Field(() => Int) // Añade un campo GraphQL para personajeId
  personajeId: number;

  @Column()
  @Field() // Añade un campo GraphQL para el papel
  papel: string;

  @Column()
  @Field() // Añade un campo GraphQL para el tipo de papel
  tipoPapel: string;

  @Column({ type: 'timestamp' })
  @Field() // Añade un campo GraphQL para la fecha de inicio
  fechaInicio: Date;

  @Column({ type: 'timestamp' })
  @Field() // Añade un campo GraphQL para la fecha de fin
  fechaFin: Date;

  @Column()
  @Field(() => Int) // Añade un campo GraphQL para las temporadas
  temporadas: number;

  @Column({ default: 'Activo' })
  @Field() // Añade un campo GraphQL para el estado
  estado: string;

  @ManyToOne(() => Serie, (serie) => serie.asignaciones)
  @JoinColumn({ name: 'serieId' })
  serie: Serie;

  @ManyToOne(() => Personaje, (personaje) => personaje.asignaciones)
  @JoinColumn({ name: 'personajeId' })
  personaje: Personaje;
}
