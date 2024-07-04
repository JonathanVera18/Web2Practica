import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SerieService } from './serie.service';
import { Serie } from './entities/serie.entity';
import { SerieGateway } from './serie.gateway';

@Module({
  imports: [TypeOrmModule.forFeature([Serie])],
  providers: [SerieService, SerieGateway],
  exports: [SerieService],
})
export class SerieModule {}
