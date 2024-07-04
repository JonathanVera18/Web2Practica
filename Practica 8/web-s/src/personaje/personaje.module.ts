import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonajeGateway } from './personaje.gateway';
import { UsersService } from 'src/users/users.service';
import { Asignacion } from 'src/asignacion/entities/asignacion.entity';
import { AsignacionService } from 'src/asignacion/asignacion.service';
import { AsignacionModule } from 'src/asignacion/asignacion.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Asignacion]),
    AsignacionModule,
  ],
  providers: [
    PersonajeGateway,
    UsersService,
    AsignacionService,
  ],
  exports: [UsersService],
})
export class PersonajeModule {}
