import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { CustomLoggerService } from '@src/shared/logger/custom-logger.service';
import { MovieService } from '@src/movies-ms/application/services/movie.service';
import { Movies } from '@src/movies-ms/domain/model/movies.model';

@Controller('movie')
export class MovieController {
  constructor(
    private moviesService: MovieService,
    private readonly logger: CustomLoggerService,
  ) {}

  @Get()
  findAll() {
    this.logger.logFindAll();
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
    this.logger.logSave(movie);
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
    this.logger.logUpdate(movie);
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
    this.logger.logDelete(id);
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
