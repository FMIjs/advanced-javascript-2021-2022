import { Model, Optional } from 'sequelize/types';
import { BaseKeys, IBase } from './base';

export interface IPostAttributes extends IBase {
  title: string;
  content: string;
  userId: number;
}

export interface IPostCreationAttributes extends Optional<
  IPostAttributes,
  BaseKeys
> { }


export interface IPostInstanceMethods {

}

export interface IPostModelInstance extends Model<IPostAttributes, IPostCreationAttributes>, IPostAttributes, IPostInstanceMethods { }