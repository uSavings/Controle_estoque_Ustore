import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Product } from './entities/Product';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DATABASE_HOST || 'localhost',
  port: parseInt(process.env.DATABASE_PORT || '3306'),
  username: process.env.DATABASE_USER || 'root',
  password: process.env.DATABASE_PASSWORD || 'nautico#20',
  database: process.env.DATABASE_NAME || 'product',
  entities: [Product],
  migrations: ['src/migration/*.ts'], 
  synchronize: false,
});
