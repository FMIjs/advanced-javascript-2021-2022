import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
  'test-fmi-js',
  'root',
  'password',
  {
    host: '127.0.0.1',
    dialect: 'mysql',
    port: 3306,
    logging: console.info
  }
);