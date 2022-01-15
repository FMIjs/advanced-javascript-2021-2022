import { DataTypes } from 'sequelize';
import { sequelize } from '../sequelize';
import * as bcrypt from 'bcrypt';
import { IUserCreationAttributes, IUserModelInstance } from '../../interfaces/models/user';

export const user = sequelize.define<IUserModelInstance, IUserCreationAttributes>('user', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    // validate: {
    //   isWeak(password: string) {
    //     if (password.length < 4) {
    //       throw new Error('Weak password!');
    //     }
    //   }
    // }
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  info: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: null
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
}, {
  hooks: {
    beforeSave(instance: IUserModelInstance) {
      if (instance.previous('password') === instance.password) { return Promise.resolve(); }
      return bcrypt.genSalt(10).then(salt => bcrypt.hash(instance.password, salt)).then(hashedPassword => {
        instance.password = hashedPassword;
      });
    }
  }
});

user.prototype.comparePasswords = function (this: IUserModelInstance, password: string) {
  return bcrypt.compare(password, this.password);
};

export function sync() {
  return user.sync({ alter: true });
}
