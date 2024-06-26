import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SerieService } from './serie.service';
import { Serie } from './entities/serie.entity';
import { CreateSerieInput } from './dto/create-serie.input';
import { UpdateSerieInput } from './dto/update-serie.input';

@Resolver(() => Serie)
export class SerieResolver {
  constructor(private readonly serieService: SerieService) {}

  @Mutation(() => Serie)
  createSerie(@Args('createSerieInput') createSerieInput: CreateSerieInput) {
    return this.serieService.create(createSerieInput);
  }

  @Query(() => [Serie], { name: 'series' })
  findAll(
    @Args('estado', { type: () => String, nullable: true }) estado?: string,
  ) {
    return this.serieService.findAll(estado);
  }

  @Query(() => Serie, { name: 'serie' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.serieService.findOne(id);
  }

  @Mutation(() => Serie)
  updateSerie(@Args('updateSerieInput') updateSerieInput: UpdateSerieInput) {
    return this.serieService.update(updateSerieInput.id, updateSerieInput);
  }

  @Mutation(() => Boolean)
  async removeSerie(@Args('id', { type: () => Int }) id: number) {
    await this.serieService.remove(id);
    return true;
  }
}
