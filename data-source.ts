import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  password: 'admin',
  username: 'postgres',
  database: 'pgWithNest',
  migrations: ['src/migrations/**/*.ts'],
});