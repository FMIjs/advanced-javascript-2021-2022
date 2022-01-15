import { sequelize } from "./sequelize";
import { models } from './models';

export function connect() {
  return sequelize.authenticate().then(() => {
    console.log('Connected to database');
    return models;
  });
}