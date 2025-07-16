import { DataSourceOptions } from 'typeorm';

export const allowedDbTypes: DataSourceOptions['type'][] = [
  'mysql',
  'mariadb',
  'postgres',
  'cockroachdb',
  'sqlite',
  'mssql',
  'sap',
  'oracle',
  'cordova',
  'nativescript',
  'react-native',
  'sqljs',
  'mongodb',
  'aurora-mysql',
  'aurora-postgres',
  'expo',
  'better-sqlite3',
  'spanner',
];

// Función que valida el tipo de base de datos
export function getDatabaseType(): DataSourceOptions['type'] {
  const type = process.env.BD_TYPE;
  if (allowedDbTypes.includes(type as DataSourceOptions['type'])) {
    return type as DataSourceOptions['type'];
  }

  throw new Error(`❌ Invalid DB TYPE in .env: ${type}`);
}
