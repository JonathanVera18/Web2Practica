import { Module } from '@nestjs/common';

import { AsignacionModule } from './asignacion/asignacion.module';


@Module({
  imports: [
    AsignacionModule,
  ],
  providers: [],
})
export class AppModule {}