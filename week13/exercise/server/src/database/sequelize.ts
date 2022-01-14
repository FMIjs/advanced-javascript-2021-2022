import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
  'db1',
  'test',
  '123456',
  {
    host: '127.0.0.1',
    dialect: 'mysql',
    port: 3306,
    logging: console.log
  }
);