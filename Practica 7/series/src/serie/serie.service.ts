import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Serie } from './entities/serie.entity';
import { CreateSerieInput } from './dto/create-serie.input';
import { UpdateSerieInput } from './dto/update-serie.input';

@Injectable()
export class SerieService {
  constructor(
    @InjectRepository(Serie)
    private serieRepository: Repository<Serie>,
  ) {}

  async create(createSerieInput: CreateSerieInput): Promise<Serie> {
    const newSerie = this.serieRepository.create(createSerieInput);
    return this.serieRepository.save(newSerie);
  }

  async findAll(estado?: string): Promise<Serie[]> {
    if (estado) {
      return this.serieRepository.find({ where: { estado } });
    }
    return this.serieRepository.find();
  }

  async findOne(id: number): Promise<Serie> {
    const serie = await this.serieRepository.findOne({ where: { id } });
    if (!serie) {
      throw new NotFoundException(`Serie with ID ${id} not found`);
    }
    return serie;
  }

  async update(id: number, updateSerieInput: UpdateSerieInput): Promise<Serie> {
    const serie = await this.findOne(id);
    Object.assign(serie, updateSerieInput);
    return this.serieRepository.save(serie);
  }

  async remove(id: number): Promise<Serie> {
    const serie = await this.findOne(id);
    if (serie) {
      serie.estado = 'Inactivo';
      await this.serieRepository.save(serie);
    }
    return serie; // Add this line to return the updated serie
  }
}
