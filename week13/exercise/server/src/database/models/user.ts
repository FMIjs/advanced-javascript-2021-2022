import { DataTypes } from "sequelize";
import { sequelize } from "../sequelize";
import * as bcrypt from "bcrypt";
import {
  IUserCreationAttributes,
  IUserModelInstance,
} from "../../interfaces/models/user";

export const user = sequelize.define<
  IUserModelInstance,
  IUserCreationAttributes
>("user", {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false,
  },
});

user.sync({ alter: true });
