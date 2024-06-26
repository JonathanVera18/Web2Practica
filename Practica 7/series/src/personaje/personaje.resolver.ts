import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PersonajeService } from './personaje.service';
import { Personaje } from './entities/personaje.entity';
import { CreatePersonajeInput } from './dto/create-personaje.input';
import { UpdatePersonajeInput } from './dto/update-personaje.input';

@Resolver(() => Personaje)
export class PersonajeResolver {
  constructor(private readonly personajeService: PersonajeService) {}

  @Mutation(() => Personaje)
  createPersonaje(@Args('createPersonajeInput') createPersonajeInput: CreatePersonajeInput) {
    return this.personajeService.create(createPersonajeInput);
  }

  @Query(() => [Personaje], { name: 'personajes' })
  findAll(
    @Args('estado', { type: () => String, nullable: true }) estado?: string,
  ) {
    return this.personajeService.findAll(estado);
  }

  @Query(() => Personaje, { name: 'personaje' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.personajeService.findOne(id);
  }

  @Mutation(() => Personaje)
  updatePersonaje(@Args('updatePersonajeInput') updatePersonajeInput: UpdatePersonajeInput) {
    return this.personajeService.update(updatePersonajeInput.id, updatePersonajeInput);
  }

  @Mutation(() => Boolean)
  async removePersonaje(@Args('id', { type: () => Int }) id: number) {
    await this.personajeService.remove(id);
    return true;
  }
}
