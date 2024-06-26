import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Personaje } from './entities/personaje.entity';
import { CreatePersonajeInput } from './dto/create-personaje.input';
import { UpdatePersonajeInput } from './dto/update-personaje.input';

@Injectable()
export class PersonajeService {
  constructor(
    @InjectRepository(Personaje)
    private personajeRepository: Repository<Personaje>,
  ) {}

  async create(createPersonajeInput: CreatePersonajeInput): Promise<Personaje> {
    const newPersonaje = this.personajeRepository.create(createPersonajeInput);
    return this.personajeRepository.save(newPersonaje);
  }

  async findAll(estado?: string): Promise<Personaje[]> {
    if (estado) {
      return this.personajeRepository.find({ where: { estado } });
    }
    return this.personajeRepository.find();
  }

  async findOne(id: number): Promise<Personaje> {
    const personaje = await this.personajeRepository.findOne({ where: { id } });
    if (!personaje) {
      throw new NotFoundException(`Personaje with ID ${id} not found`);
    }
    return personaje;
  }

  async update(id: number, updatePersonajeInput: UpdatePersonajeInput): Promise<Personaje> {
    const personaje = await this.findOne(id);
    Object.assign(personaje, updatePersonajeInput);
    return this.personajeRepository.save(personaje);
  }

  async remove(id: number): Promise<Personaje> {
    const personaje = await this.findOne(id);
    if (personaje) {
      personaje.estado = 'Inactivo';
      await this.personajeRepository.save(personaje);
    }
    return personaje; // Add this line to return the personaje
  }
}
