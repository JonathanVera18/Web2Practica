import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AsignacionService } from './asignacion.service';
import { Asignacion } from './entities/asignacion.entity';
import { CreateAsignacionInput } from './dto/create-asignacion.input';
import { UpdateAsignacionInput } from './dto/update-asignacion.input';

@Resolver(() => Asignacion)
export class AsignacionResolver {
  constructor(private readonly asignacionService: AsignacionService) {}

  @Mutation(() => Asignacion)
  createAsignacion(@Args('createAsignacionInput') createAsignacionInput: CreateAsignacionInput) {
    return this.asignacionService.create(createAsignacionInput);
  }

  @Query(() => [Asignacion], { name: 'asignaciones' })
  findAll(
    @Args('estado', { type: () => String, nullable: true }) estado?: string,
  ) {
    return this.asignacionService.findAll(estado);
  }

  @Query(() => Asignacion, { name: 'asignacion' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.asignacionService.findOne(id);
  }

  @Mutation(() => Asignacion)
  updateAsignacion(@Args('updateAsignacionInput') updateAsignacionInput: UpdateAsignacionInput) {
    return this.asignacionService.update(updateAsignacionInput.id, updateAsignacionInput);
  }

  @Mutation(() => Boolean)
  async removeAsignacion(@Args('id', { type: () => Int }) id: number) {
    await this.asignacionService.remove(id);
    return true;
  }
}
