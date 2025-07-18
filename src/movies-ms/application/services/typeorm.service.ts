import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { getDatabaseType } from '@src/shared/database/database.config';

@Injectable()
export class TypeormService implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): Promise<TypeOrmModuleOptions> | TypeOrmModuleOptions {
    return {
      type: getDatabaseType() || undefined,
      host: process.env.BD_HOST,
      port: parseInt(process.env.BD_PORT ?? '', 10),
      username: process.env.BD_USERNAME,
      password: process.env.BD_PASSWORD,
      database: process.env.DATABASE,
      entities: ['dist/**/*.model.{ts,js}'],
      autoLoadEntities: true,
    } as TypeOrmModuleOptions;
  }
}
