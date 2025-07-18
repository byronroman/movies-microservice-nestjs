import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Logger,
} from '@nestjs/common';
import { MovieService } from '@movies-ms/application/services/movie.service';
import { Movies } from '@src/movies-ms/domain/model/movies.model';

@Controller('movie')
export class MovieController {
  private readonly logger = new Logger(MovieController.name);

  constructor(private moviesService: MovieService) {}

  @Get()
  findAll() {
    this.logger.log('Obteniendo todas las películas');
    return this.moviesService
      .findAll()
      .then((res) => {
        return { sucess: true, data: res };
      })
      .catch((error) => {
        throw new HttpException(
          error as string,
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      });
  }

  @Post()
  save(@Body() movie: Movies) {
    this.logger.log(
      `Guardando una nueva película: ${JSON.stringify(movie.name)}`,
    );
    return this.moviesService
      .create(movie)
      .then((res) => {
        return { sucess: true, data: res };
      })
      .catch((error) => {
        throw new HttpException(
          error as string,
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      });
  }

  @Post('/update')
  update(@Body() movie: Movies) {
    this.logger.log(`Película "${JSON.stringify(movie.name)}" actualizada`);
    return this.moviesService
      .update(movie)
      .then((res) => {
        return { sucess: true, data: res };
      })
      .catch((error) => {
        throw new HttpException(
          error as string,
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      });
  }

  @Get('/delete/:id')
  delete(@Param('id') id: number) {
    this.logger.log(`Película con id: ${JSON.stringify(id)} eliminada`);
    return this.moviesService
      .delete(id)
      .then((res) => {
        return { sucess: true, data: res };
      })
      .catch((error) => {
        throw new HttpException(
          error as string,
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      });
  }
}
