import { Module } from '@nestjs/common';

import { AsignacionService } from './asignacion.service';

import { AsignacionGateway } from './asignacion.gateway';

@Module({
  providers: [ AsignacionService, AsignacionGateway],
})
export class AsignacionModule {}