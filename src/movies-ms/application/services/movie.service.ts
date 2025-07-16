import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movies } from '@movies-ms/domain/model/movies.model';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(Movies)
    private readonly movieRepository: Repository<Movies>,
  ) {}

  async findAll(): Promise<Movies[]> {
    return await this.movieRepository.findBy({ status: true });
  }

  async findById(id: number): Promise<Movies | null> {
    return await this.movieRepository.findOneBy({ id: id, status: true });
  }

  async create(movie: Movies): Promise<Movies> {
    return await this.movieRepository.save(movie);
  }

  async update(movie: Movies): Promise<Movies> {
    return await this.movieRepository.save(movie);
  }

  async delete(id: number): Promise<string> {
    await this.movieRepository.delete(id);

    return 'Película Eliminada';
  }
}
