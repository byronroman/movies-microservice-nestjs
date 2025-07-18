import { ConsoleLogger, Injectable } from '@nestjs/common';
import { Movies } from '@src/movies-ms/domain/model/movies.model';

@Injectable()
export class CustomLoggerService extends ConsoleLogger {
  log(message: string) {
    super.log(`\x1b[30m[LOG] ${message}\x1b[0m`);
  }

  error(message: string, stack?: string) {
    super.error(`\x1b[31m[ERROR] ${message}\x1b[0m`, stack);
  }

  warn(message: string) {
    super.warn(`\x1b[33m[WARN] ${message}\x1b[0m`);
  }

  debug(message: string) {
    super.debug(`\x1b[35m[DEBUG] ${message}\x1b[0m`);
  }

  verbose(message: string) {
    super.verbose(`\x1b[32m[VERBOSE] ${message}\x1b[0m`);
  }

  logFindAll() {
    super.log(`\x1b[36m[GET /movie] Obteniendo todas las películas\x1b[0m`);
  }

  logSave(movie: Partial<Movies>) {
    super.log(`\x1b[32m[POST /movie] Guardando película: ${movie.name}\x1b[0m`);
  }

  logUpdate(movie: Partial<Movies>) {
    super.log(
      `\x1b[33m[POST /movie/update] Actualizando película: ${movie.name}\x1b[0m`,
    );
  }

  logDelete(id: number) {
    super.log(
      `\x1b[31m[GET /movie/delete/${id}] Eliminando película con id: ${id}\x1b[0m`,
    );
  }
}
