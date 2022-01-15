import { DataTypes, Sequelize } from 'sequelize';
import { sequelize } from '../sequelize';
import { IPostCreationAttributes, IPostModelInstance } from '../../interfaces/models/post';

export const post = sequelize.define<IPostModelInstance, IPostCreationAttributes>('post', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  userId: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false
  }
});

export function sync() {
  return post.sync({ alter: true });
}
