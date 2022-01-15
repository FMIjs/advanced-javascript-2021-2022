import { HasManyGetAssociationsMixin, HasManySetAssociationsMixin, HasManyAddAssociationMixin, Model, Optional } from 'sequelize/types';
import { BaseKeys, IBase } from './base';
import { IPostModelInstance } from './post';

export interface IUserAttributes extends IBase {
  email: string;
  password: string;
  name: string;
  info: string | null;
  posts: IPostModelInstance[]
}

export interface IUserCreationAttributes extends Optional<
  IUserAttributes,
  BaseKeys | 'info' | 'posts'
> { }


export interface IUserInstanceMethods {
  comparePasswords: (password: string) => Promise<boolean>;
}

export interface IUserModelInstance extends Model<IUserAttributes, IUserCreationAttributes>, IUserAttributes, IUserInstanceMethods {
  getPosts: HasManyGetAssociationsMixin<IPostModelInstance>;
  setPosts: HasManySetAssociationsMixin<IPostModelInstance, number>;
  addPost: HasManyAddAssociationMixin<IPostModelInstance, number>;
}