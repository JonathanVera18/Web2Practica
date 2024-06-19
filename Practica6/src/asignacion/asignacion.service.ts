import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Asignacion } from './entities/asignacion.entity'; // Asegúrate de que la ruta sea correcta
import { CreateAsignacionDto } from './dto/create-asignacion.dto';
import { UpdateAsignacionDto } from './dto/update-asignacion.dto';

@Injectable()
export class AsignacionService {
  constructor(
    @InjectRepository(Asignacion)
    private asignacionRepository: Repository<Asignacion>,
  ) {}

  async create(createAsignacionDto: CreateAsignacionDto): Promise<Asignacion> {
    const asignacion = this.asignacionRepository.create(createAsignacionDto);
    return this.asignacionRepository.save(asignacion);
  }

  async findAll(): Promise<Asignacion[]> {
    return this.asignacionRepository.find();
  }

  async findOne(id: number): Promise<Asignacion> {
    return this.asignacionRepository.findOneBy({ id });
  }

  async update(id: number, updateAsignacionDto: UpdateAsignacionDto): Promise<Asignacion> {
    await this.asignacionRepository.update(id, updateAsignacionDto);
    return this.asignacionRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.asignacionRepository.update(id, { estado: 'Inactivo' });
  }
}
