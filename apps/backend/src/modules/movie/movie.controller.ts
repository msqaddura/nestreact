import { Controller, Get, Param, Query } from '@nestjs/common';
import { MovieService } from './movie.service';

@Controller('/movie')
export class MovieController {
  constructor(private readonly service: MovieService) {}

  @Get()
  async getData(@Query('query') query: string, @Query('page') page: string) {
    return this.service.findAll(query, page);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Get(':id/similar')
  async findSimilar(@Param('id') id: string) {
    return this.service.findSimilar(id);
  }
}
