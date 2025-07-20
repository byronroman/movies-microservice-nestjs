import { MovieController } from '@src/movies-ms/infrastructure/controller/movie/movie.controller';
import { MovieService } from '@src/movies-ms/application/services/movie.service';
import { CustomLoggerService } from '@src/shared/logger/custom-logger.service';
import { Movies } from '@src/movies-ms/domain/model/movies.model';
import { HttpException, HttpStatus } from '@nestjs/common';

describe('MovieController', () => {
  let controller: MovieController;
  let movieService: jest.Mocked<MovieService>;
  let logger: jest.Mocked<CustomLoggerService>;

  const mockMovie: Movies = {
    id: 1,
    name: 'Test Movie',
    description: 'Description',
    image: 'image.jpg',
    status: true,
    time: '120min',
  };

  beforeEach(() => {
    movieService = {
      findAll: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
      findById: jest.fn(),
    } as unknown as jest.Mocked<MovieService>;

    logger = {
      logFindAll: jest.fn(),
      logSave: jest.fn(),
      logUpdate: jest.fn(),
      logDelete: jest.fn(),
    } as unknown as jest.Mocked<CustomLoggerService>;

    controller = new MovieController(movieService, logger);
  });

  describe('findAll', () => {
    it('should return all movies', async () => {
      movieService.findAll.mockResolvedValue([mockMovie]);

      const result = await controller.findAll();

      expect(logger.logFindAll).toHaveBeenCalled();
      expect(result).toEqual({ sucess: true, data: [mockMovie] });
    });

    it('should throw exception if service fails', async () => {
      movieService.findAll.mockRejectedValue('Error');

      await expect(controller.findAll()).rejects.toThrow(
        new HttpException('Error', HttpStatus.INTERNAL_SERVER_ERROR),
      );
    });
  });

  describe('save', () => {
    it('should save a movie', async () => {
      movieService.create.mockResolvedValue(mockMovie);

      const result = await controller.save(mockMovie);

      expect(logger.logSave).toHaveBeenCalledWith(mockMovie);
      expect(result).toEqual({ sucess: true, data: mockMovie });
    });

    it('should throw exception on error', async () => {
      movieService.create.mockRejectedValue('Error');

      await expect(controller.save(mockMovie)).rejects.toThrow(
        new HttpException('Error', HttpStatus.INTERNAL_SERVER_ERROR),
      );
    });
  });

  describe('update', () => {
    it('should update a movie', async () => {
      movieService.update.mockResolvedValue(mockMovie);

      const result = await controller.update(mockMovie);

      expect(logger.logUpdate).toHaveBeenCalledWith(mockMovie);
      expect(result).toEqual({ sucess: true, data: mockMovie });
    });

    it('should throw exception on error', async () => {
      movieService.update.mockRejectedValue('Error');

      await expect(controller.update(mockMovie)).rejects.toThrow(
        new HttpException('Error', HttpStatus.INTERNAL_SERVER_ERROR),
      );
    });
  });

  describe('delete', () => {
    it('should delete a movie', async () => {
      movieService.delete.mockResolvedValue('Película Eliminada');

      const result = await controller.delete(1);

      expect(logger.logDelete).toHaveBeenCalledWith(1);
      expect(result).toEqual({ sucess: true, data: 'Película Eliminada' });
    });

    it('should throw exception on error', async () => {
      movieService.delete.mockRejectedValue('Error');

      await expect(controller.delete(1)).rejects.toThrow(
        new HttpException('Error', HttpStatus.INTERNAL_SERVER_ERROR),
      );
    });
  });
});
