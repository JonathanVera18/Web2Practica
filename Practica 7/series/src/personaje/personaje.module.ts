import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonajeService } from './personaje.service';
import { PersonajeResolver } from './personaje.resolver';
import { Personaje } from './entities/personaje.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Personaje])],
  providers: [PersonajeService, PersonajeResolver],
})
export class PersonajeModule {}
