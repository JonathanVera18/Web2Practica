import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Personaje } from './entities/personaje.entity';
import { CreatePersonajeDto } from './dto/create-personaje.dto';
import { UpdatePersonajeDto } from './dto/update-personaje.dto';

@Injectable()
export class PersonajeService {
  constructor(
    @InjectRepository(Personaje)
    private personajeRepository: Repository<Personaje>,
  ) {}

  async create(createPersonajeDto: CreatePersonajeDto): Promise<Personaje> {
    const personaje = this.personajeRepository.create(createPersonajeDto);
    return this.personajeRepository.save(personaje);
  }

  async findAll(): Promise<Personaje[]> {
    return this.personajeRepository.find();
  }

  async findOne(id: number): Promise<Personaje> {
    return this.personajeRepository.findOneBy({ id });
  }

  async update(id: number, updatePersonajeDto: UpdatePersonajeDto): Promise<Personaje> {
    await this.personajeRepository.update(id, updatePersonajeDto);
    return this.personajeRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.personajeRepository.update(id, { estado: 'Inactivo' });
  }
}
