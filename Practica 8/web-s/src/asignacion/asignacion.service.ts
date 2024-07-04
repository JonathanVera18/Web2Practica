import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Asignacion } from './entities/asignacion.entity';
import { CreateAsignacionDto } from './dto/create-asignacion.dto';

@Injectable()
export class AsignacionService {
  constructor(
    @InjectRepository(Asignacion)
    private readonly asignacionRepository: Repository<Asignacion>,
  ) {}

  async create(createAsignacionDto: CreateAsignacionDto): Promise<Asignacion> {
    const asignacion = this.asignacionRepository.create(createAsignacionDto);
    return this.asignacionRepository.save(asignacion);
  }

  async findAll(estado?: string): Promise<Asignacion[]> {
    if (estado) {
      return this.asignacionRepository.find({ where: { estado } });
    }
    return this.asignacionRepository.find();
  }

  async findOne(id: number): Promise<Asignacion> {
    const asignacion = await this.asignacionRepository.findOne({ where: { id } });
    if (!asignacion) {
      throw new NotFoundException(`Asignacion with ID ${id} not found`);
    }
    return asignacion;
  }

  async update(id: number, updateAsignacionDto: any): Promise<Asignacion> {
    const asignacion = await this.asignacionRepository.preload({
      id,
      ...updateAsignacionDto,
    });
    if (!asignacion) {
      throw new NotFoundException(`Asignacion with ID ${id} not found`);
    }
    return this.asignacionRepository.save(asignacion);
  }

  async remove(id: number): Promise<void> {
    const asignacion = await this.findOne(id);
    await this.asignacionRepository.remove(asignacion);
  }
}
