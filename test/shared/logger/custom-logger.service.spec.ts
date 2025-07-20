import { CustomLoggerService } from '@src/shared/logger/custom-logger.service';
import { ConsoleLogger } from '@nestjs/common';
import { Movies } from '@src/movies-ms/domain/model/movies.model';

describe('CustomLoggerService', () => {
  let logger: CustomLoggerService;

  beforeEach(() => {
    logger = new CustomLoggerService();

    jest
      .spyOn(ConsoleLogger.prototype, 'log')
      .mockImplementation(() => undefined);
    jest
      .spyOn(ConsoleLogger.prototype, 'error')
      .mockImplementation(() => undefined);
    jest
      .spyOn(ConsoleLogger.prototype, 'warn')
      .mockImplementation(() => undefined);
    jest
      .spyOn(ConsoleLogger.prototype, 'debug')
      .mockImplementation(() => undefined);
    jest
      .spyOn(ConsoleLogger.prototype, 'verbose')
      .mockImplementation(() => undefined);
  });

  it('should log message', () => {
    logger.log('test');
    expect(ConsoleLogger.prototype.log).toHaveBeenCalledWith(
      '\x1b[30m[LOG] test\x1b[0m',
    );
  });

  it('should log error message', () => {
    logger.error('error', 'stack');
    expect(ConsoleLogger.prototype.error).toHaveBeenCalledWith(
      '\x1b[31m[ERROR] error\x1b[0m',
      'stack',
    );
  });

  it('should log warning message', () => {
    logger.warn('warning');
    expect(ConsoleLogger.prototype.warn).toHaveBeenCalledWith(
      '\x1b[33m[WARN] warning\x1b[0m',
    );
  });

  it('should log debug message', () => {
    logger.debug('debugging');
    expect(ConsoleLogger.prototype.debug).toHaveBeenCalledWith(
      '\x1b[35m[DEBUG] debugging\x1b[0m',
    );
  });

  it('should log verbose message', () => {
    logger.verbose('details');
    expect(ConsoleLogger.prototype.verbose).toHaveBeenCalledWith(
      '\x1b[32m[VERBOSE] details\x1b[0m',
    );
  });

  it('should log findAll', () => {
    logger.logFindAll();
    expect(ConsoleLogger.prototype.log).toHaveBeenCalledWith(
      '\x1b[36m[GET /movie] Obteniendo todas las películas\x1b[0m',
    );
  });

  it('should log save movie', () => {
    const movie: Partial<Movies> = { name: 'Matrix' };
    logger.logSave(movie);
    expect(ConsoleLogger.prototype.log).toHaveBeenCalledWith(
      '\x1b[32m[POST /movie] Guardando película: Matrix\x1b[0m',
    );
  });

  it('should log update movie', () => {
    const movie: Partial<Movies> = { name: 'Inception' };
    logger.logUpdate(movie);
    expect(ConsoleLogger.prototype.log).toHaveBeenCalledWith(
      '\x1b[33m[POST /movie/update] Actualizando película: Inception\x1b[0m',
    );
  });

  it('should log delete movie by id', () => {
    logger.logDelete(10);
    expect(ConsoleLogger.prototype.log).toHaveBeenCalledWith(
      '\x1b[31m[GET /movie/delete/10] Eliminando película con id: 10\x1b[0m',
    );
  });
});
