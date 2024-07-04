import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AsignacionService } from './asignacion.service';
import { Asignacion } from './entities/asignacion.entity';
import { AsignacionGateway } from './asignacion.gateway';

@Module({
  imports: [TypeOrmModule.forFeature([Asignacion])],
  providers: [ AsignacionService, AsignacionGateway],
})
export class AsignacionModule {}