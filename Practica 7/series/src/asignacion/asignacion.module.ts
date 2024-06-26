import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AsignacionService } from './asignacion.service';
import { AsignacionResolver } from './asignacion.resolver';
import { Asignacion } from './entities/asignacion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Asignacion])],
  providers: [AsignacionService, AsignacionResolver],
})
export class AsignacionModule {}
