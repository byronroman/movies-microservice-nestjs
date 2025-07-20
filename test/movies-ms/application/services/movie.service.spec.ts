import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MovieService } from '@src/movies-ms/application/services/movie.service';
import { Movies } from '@src/movies-ms/domain/model/movies.model';

describe('MovieService', () => {
  let service: MovieService;
  let repo: Repository<Movies>;

  const mockMovie: Movies = {
    id: 1,
    name: 'Interestelar',
    description: 'Sci-fi',
    time: '169 min',
    image: 'img.jpg',
    status: true,
  };

  const mockRepository = {
    findBy: jest.fn().mockResolvedValue([mockMovie]),
    findOneBy: jest.fn().mockResolvedValue(mockMovie),
    save: jest.fn().mockImplementation((movie) => Promise.resolve(movie)),
    delete: jest.fn().mockResolvedValue({ affected: 1 }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MovieService,
        {
          provide: getRepositoryToken(Movies),
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<MovieService>(MovieService);
    repo = module.get<Repository<Movies>>(getRepositoryToken(Movies));
  });

  it('should return all active movies', async () => {
    const result = await service.findAll();
    expect(repo.findBy).toHaveBeenCalledWith({ status: true });
    expect(result).toEqual([mockMovie]);
  });

  it('should return a movie by ID', async () => {
    const result = await service.findById(1);
    expect(repo.findOneBy).toHaveBeenCalledWith({ id: 1, status: true });
    expect(result).toEqual(mockMovie);
  });

  it('should create a movie', async () => {
    const result = await service.create(mockMovie);
    expect(repo.save).toHaveBeenCalledWith(mockMovie);
    expect(result).toEqual(mockMovie);
  });

  it('should update a movie', async () => {
    const updated = { ...mockMovie, name: 'Batman' };
    const result = await service.update(updated);
    expect(repo.save).toHaveBeenCalledWith(updated);
    expect(result).toEqual(updated);
  });

  it('should delete a movie and return message', async () => {
    const result = await service.delete(1);
    expect(repo.delete).toHaveBeenCalledWith(1);
    expect(result).toBe('Película Eliminada');
  });
});
