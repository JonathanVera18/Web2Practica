import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AsignacionService } from './asignacion.service';
import { CreateAsignacionDto } from './dto/create-asignacion.dto';
import { UpdateAsignacionDto } from './dto/update-asignacion.dto';

@Controller('asignacion')
export class AsignacionController {
  constructor(private readonly asignacionService: AsignacionService) {}

  @Post()
  async create(@Body() createAsignacionDto: CreateAsignacionDto) {
    return this.asignacionService.create(createAsignacionDto);
  }

  @Get()
  async findAll() {
    return this.asignacionService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.asignacionService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateAsignacionDto: UpdateAsignacionDto) {
    return this.asignacionService.update(+id, updateAsignacionDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.asignacionService.remove(+id);
  }
}
