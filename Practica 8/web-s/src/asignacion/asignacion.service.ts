import { Injectable } from '@nestjs/common';
import { CreateAsignacionDto } from './dto/create-asignacion.dto';
import { UpdateAsignacionDto } from './dto/update-asignacion.dto';
import { Asignacion } from './entities/asignacion.entity';

const asignaciones: Asignacion[] = [
  {
    id: 1,
    serieId: 1,
    personajeId: 1,
    papel: 'Protagonista',
    tipoPapel: 'Principal',
    fechaInicio: new Date('2023-01-01'),
    fechaFin: new Date('2023-12-31'),
    temporadas: 1,
    estado: 'Activo'
  },
  {
    id: 2,
    serieId: 1,
    personajeId: 2,
    papel: 'Antagonista',
    tipoPapel: 'Principal',
    fechaInicio: new Date('2023-01-01'),
    fechaFin: new Date('2023-12-31'),
    temporadas: 1,
    estado: 'Activo'
  }
];

@Injectable()
export class AsignacionService {
  create(createAsignacionDto: CreateAsignacionDto) {
    const newAsignacion = {
      id: asignaciones.length + 1,
      ...createAsignacionDto,
      estado: createAsignacionDto.estado || 'Activo'
    };
    asignaciones.push(newAsignacion);
    return newAsignacion;
  }

  findAll() {
    return asignaciones;
  }

  findOne(id: number) {
    return asignaciones.find(asignacion => asignacion.id === id);
  }

  update(id: number, updateAsignacionDto: UpdateAsignacionDto) {
    const index = asignaciones.findIndex(asignacion => asignacion.id === id);
    if (index !== -1) {
      asignaciones[index] = { ...asignaciones[index], ...updateAsignacionDto };
      return asignaciones[index];
    }
    return null;
  }

  remove(id: number) {
    const index = asignaciones.findIndex(asignacion => asignacion.id === id);
    if (index !== -1) {
      asignaciones[index].estado = 'Inactivo';
      return asignaciones[index];
    }
    return null;
  }
}