import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { MovieService } from '@movies-ms/application/services/movie.service';
import { Movies } from '@src/movies-ms/domain/model/movies.model';

@Controller('movie')
export class MovieController {
  constructor(private moviesService: MovieService) {}

  @Get()
  get() {
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
