import { getDatabaseType } from '@src/shared/database/database.config';
import { DataSourceOptions } from 'typeorm';

describe('getDatabaseType', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...originalEnv }; // clona las variables para evitar efectos colaterales
  });

  afterEach(() => {
    process.env = originalEnv; // restaura el entorno original
  });

  it.each([
    'mysql',
    'postgres',
    'sqlite',
    'mssql',
    'mongodb',
    'aurora-postgres',
    'better-sqlite3',
  ])('should return valid db type: %s', (dbType) => {
    process.env.BD_TYPE = dbType;
    const result = getDatabaseType();
    expect(result).toBe(dbType);
  });

  it('should throw error for invalid db type', () => {
    process.env.BD_TYPE = 'invalid-db' as DataSourceOptions['type'];

    expect(() => getDatabaseType()).toThrowError(
      `❌ Invalid DB TYPE in .env: invalid-db`,
    );
  });

  it('should throw error if BD_TYPE is undefined', () => {
    delete process.env.BD_TYPE;

    expect(() => getDatabaseType()).toThrowError(
      `❌ Invalid DB TYPE in .env: undefined`,
    );
  });
});
