import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Serie } from './entities/serie.entity';
import { CreateSerieDto } from './dto/create-serie.dto';
import { UpdateSerieDto } from './dto/update-serie.dto';

@Injectable()
export class SerieService {
  constructor(
    @InjectRepository(Serie)
    private serieRepository: Repository<Serie>,
  ) {}

  async create(createSerieDto: CreateSerieDto): Promise<Serie> {
    const serie = this.serieRepository.create(createSerieDto);
    return this.serieRepository.save(serie);
  }

  async findAll(): Promise<Serie[]> {
    return this.serieRepository.find();
  }

  async findOne(id: number): Promise<Serie> {
    return this.serieRepository.findOneBy({ id });
  }

  async update(id: number, updateSerieDto: UpdateSerieDto): Promise<Serie> {
    await this.serieRepository.update(id, updateSerieDto);
    return this.serieRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.serieRepository.update(id, { estado: 'Inactivo' });
  }
}
