import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AsignacionService } from './asignacion.service';
import { AsignacionController } from './asignacion.controller';
import { Asignacion } from './entities/asignacion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Asignacion])],
  controllers: [AsignacionController],
  providers: [AsignacionService],
})
export class AsignacionModule {}
