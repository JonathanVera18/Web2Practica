import { Personaje } from 'src/personaje/entities/personaje.entity';
import { Serie } from 'src/serie/entities/serie.entity';
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
    ManyToOne,
    JoinColumn
  } from 'typeorm';
  
  @Entity({name:'Asignacion'})
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
  
    @ManyToOne(() => Serie, serie => serie.asignaciones)
    @JoinColumn({ name: 'serieId' })
    serie: Serie;
  
    @ManyToOne(() => Personaje, personaje => personaje.asignaciones)
    @JoinColumn({ name: 'personajeId' })
    personaje: Personaje;
  }
  