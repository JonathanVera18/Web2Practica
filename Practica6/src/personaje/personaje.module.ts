import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonajeService } from './personaje.service';
import { PersonajeController } from './personaje.controller';
import { Personaje } from './entities/personaje.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Personaje])],
  controllers: [PersonajeController],
  providers: [PersonajeService],
})
export class PersonajeModule {}
