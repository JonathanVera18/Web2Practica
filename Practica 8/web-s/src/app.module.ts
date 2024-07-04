import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Asignacion } from './asignacion/entities/asignacion.entity';
import { Serie } from './serie/entities/serie.entity';
import { SerieModule } from './serie/serie.module';
import { AsignacionModule } from './asignacion/asignacion.module';
import { PersonajeModule } from './personaje/personaje.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', // o el tipo de base de datos que estés utilizando
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'PracticaWeb',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false,
    }),
    TypeOrmModule.forFeature([Asignacion, Serie]),
    SerieModule,
    AsignacionModule,
    PersonajeModule,
  ],
  providers: [
  ],
})
export class AppModule {}
