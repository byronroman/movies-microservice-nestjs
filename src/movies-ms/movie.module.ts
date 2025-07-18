import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeormService } from '@src/movies-ms/application/services/typeorm.service';
import { Movies } from '@src/movies-ms/domain/model/movies.model';
import { MovieController } from '@src/movies-ms/infrastructure/controller/movie/movie.controller';
import { MovieService } from '@src/movies-ms/application/services/movie.service';
import { LoggerModule } from '@src/shared/logger/logger.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({ useClass: TypeormService }),
    TypeOrmModule.forFeature([Movies]),
    LoggerModule,
  ],
  controllers: [MovieController],
  providers: [TypeormService, MovieService],
})
export class MoviesModule {}
