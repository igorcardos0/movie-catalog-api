import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/auth/auth.guard';
import { MovieDto } from './movie.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('movies')
@Controller('movies')
export class MoviesController {
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createMovieDto: MovieDto) {
    // Lógica para adicionar um novo filme ao catálogo
    const { title, director, year, genre, cast, synopsis } = createMovieDto;
    // Lógica para salvar o filme no banco de dados ou realizar outra operação
    return `Movie ${title} created successfully`;
  }

  @Get()
  findAll() {
    return 'This action returns all movies';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a movie with id #${id}`;
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() updateMovieDto: MovieDto) {
    return `This action updates a movie with id #${id}`;
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a movie with id #${id}`;
  }
}
