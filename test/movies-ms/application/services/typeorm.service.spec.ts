import { TypeormService } from '@src/movies-ms/application/services/typeorm.service';
import * as dbConfig from '@src/shared/database/database.config';

jest.mock('@src/shared/database/database.config', () => ({
  getDatabaseType: jest.fn(),
}));

const mockedDbConfig = jest.mocked(dbConfig);

describe('TypeormService', () => {
  let service: TypeormService;

  beforeEach(() => {
    service = new TypeormService();
    process.env.BD_HOST = 'localhost';
    process.env.BD_PORT = '5432';
    process.env.BD_USERNAME = 'user';
    process.env.BD_PASSWORD = 'pass';
    process.env.DATABASE = 'testdb';
  });

  it('should create TypeORM options with defined type', () => {
    mockedDbConfig.getDatabaseType.mockReturnValueOnce('postgres');

    const options = service.createTypeOrmOptions();

    expect(options).toEqual({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'user',
      password: 'pass',
      database: 'testdb',
      entities: ['dist/**/*.model.{ts,js}'],
      autoLoadEntities: true,
    });
  });

  it('should throw if getDatabaseType throws error', () => {
    mockedDbConfig.getDatabaseType.mockImplementationOnce(() => {
      throw new Error('❌ Invalid DB TYPE in .env: undefined');
    });

    expect(() => service.createTypeOrmOptions()).toThrow(
      '❌ Invalid DB TYPE in .env: undefined',
    );
  });
});
