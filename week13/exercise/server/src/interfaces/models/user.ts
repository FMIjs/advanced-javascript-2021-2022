import { HasManyGetAssociationsMixin, HasManySetAssociationsMixin, HasManyAddAssociationMixin, Model, Optional } from 'sequelize/types';
import { BaseKeys, IBase } from './base';
import { IPostModelInstance } from './post';

export interface IUserAttributes extends IBase {
  email: string;
  password: string;
  username: string;
  firstName: string;
  lastName: string;
  posts: IPostModelInstance[]
}

export interface IUserCreationAttributes extends Optional<
  IUserAttributes,
  BaseKeys | 'posts'
> { }


export interface IUserInstanceMethods {
}

export interface IUserModelInstance extends Model<IUserAttributes, IUserCreationAttributes>, IUserAttributes, IUserInstanceMethods {
  getPosts: HasManyGetAssociationsMixin<IPostModelInstance>;
  setPosts: HasManySetAssociationsMixin<IPostModelInstance, number>;
  addPost: HasManyAddAssociationMixin<IPostModelInstance, number>;
}