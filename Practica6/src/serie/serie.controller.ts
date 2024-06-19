import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SerieService } from './serie.service';
import { CreateSerieDto } from './dto/create-serie.dto';
import { UpdateSerieDto } from './dto/update-serie.dto';

@Controller('serie')
export class SerieController {
  constructor(private readonly serieService: SerieService) {}

  @Post()
  async create(@Body() createSerieDto: CreateSerieDto) {
    return this.serieService.create(createSerieDto);
  }

  @Get()
  async findAll() {
    return this.serieService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.serieService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateSerieDto: UpdateSerieDto) {
    return this.serieService.update(+id, updateSerieDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.serieService.remove(+id);
  }
}
