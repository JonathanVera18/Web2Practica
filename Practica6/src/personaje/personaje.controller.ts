import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PersonajeService } from './personaje.service';
import { CreatePersonajeDto } from './dto/create-personaje.dto';
import { UpdatePersonajeDto } from './dto/update-personaje.dto';

@Controller('personaje')
export class PersonajeController {
  constructor(private readonly personajeService: PersonajeService) {}

  @Post()
  async create(@Body() createPersonajeDto: CreatePersonajeDto) {
    return this.personajeService.create(createPersonajeDto);
  }

  @Get()
  async findAll() {
    return this.personajeService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.personajeService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updatePersonajeDto: UpdatePersonajeDto) {
    return this.personajeService.update(+id, updatePersonajeDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.personajeService.remove(+id);
  }
}
