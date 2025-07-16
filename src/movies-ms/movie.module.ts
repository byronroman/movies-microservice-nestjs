import { Module } from '@nestjs/common';
import { MovieController } from '@movies-ms/infrastructure/controller/movie/movie.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movies } from '@movies-ms/domain/model/movies.model';
import { TypeormService } from '@movies-ms/application/services/typeorm.service';
import { MovieService } from '@movies-ms/application/services/movie.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({ useClass: TypeormService }),
    TypeOrmModule.forFeature([Movies]),
  ],
  controllers: [MovieController],
  providers: [TypeormService, MovieService],
})
export class MoviesModule {}
