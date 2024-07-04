import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Personaje } from './entities/personaje.entity';
import { CreatePersonajeDto } from './dto/create-personaje.dto';
import { UpdatePersonajeDto } from './dto/update-personaje.dto';

@Injectable()
export class PersonajeService {
  constructor(
    @InjectRepository(Personaje)
    private readonly personajeRepository: Repository<Personaje>,
  ) {}

  async create(createPersonajeDto: CreatePersonajeDto): Promise<Personaje> {
    const personaje = this.personajeRepository.create(createPersonajeDto);
    return this.personajeRepository.save(personaje);
  }

  async findAll(): Promise<Personaje[]> {
    return this.personajeRepository.find({ relations: ['asignaciones'] });
  }

  async findOne(id: number): Promise<Personaje> {
    const personaje = await this.personajeRepository.findOne({ where: { id }, relations: ['asignaciones'] });
    if (!personaje) {
      throw new NotFoundException(`Personaje with ID ${id} not found`);
    }
    return personaje;
  }

  async update(id: number, updatePersonajeDto: UpdatePersonajeDto): Promise<Personaje> {
    const personaje = await this.personajeRepository.preload({
      id,
      ...updatePersonajeDto,
    });
    if (!personaje) {
      throw new NotFoundException(`Personaje with ID ${id} not found`);
    }
    return this.personajeRepository.save(personaje);
  }

  async remove(id: number): Promise<void> {
    const personaje = await this.findOne(id);
    await this.personajeRepository.remove(personaje);
  }
}
