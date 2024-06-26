import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Asignacion } from './entities/asignacion.entity';
import { CreateAsignacionInput } from './dto/create-asignacion.input';
import { UpdateAsignacionInput } from './dto/update-asignacion.input';

@Injectable()
export class AsignacionService {
  constructor(
    @InjectRepository(Asignacion)
    private asignacionRepository: Repository<Asignacion>,
  ) {}

  create(createAsignacionDto: CreateAsignacionInput): Promise<Asignacion> {
    const asignacion = this.asignacionRepository.create(createAsignacionDto);
    return this.asignacionRepository.save(asignacion);
  }

  findAll(estado?: string): Promise<Asignacion[]> {
    if (estado) {
      return this.asignacionRepository.find({ where: { estado } });
    }
    return this.asignacionRepository.find();
  }

  findOne(id: number): Promise<Asignacion> {
    return this.asignacionRepository.findOne({ where: { id } });
  }

  update(id: number, updateAsignacionDto: UpdateAsignacionInput): Promise<Asignacion> {
    return this.asignacionRepository.save({ ...updateAsignacionDto, id });
  }

  async remove(id: number): Promise<void> {
    const asignacion = await this.findOne(id);
    if (asignacion) {
      asignacion.estado = 'Inactivo';
      await this.asignacionRepository.save(asignacion);
    }
  }
}
