import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SerieService } from './serie.service';
import { SerieResolver } from './serie.resolver';
import { Serie } from './entities/serie.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Serie])],
  providers: [SerieService, SerieResolver],
})
export class SerieModule {}
