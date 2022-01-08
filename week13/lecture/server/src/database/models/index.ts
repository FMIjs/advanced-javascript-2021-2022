import { user } from './user';
import { post } from './post';

user.hasMany(post, { foreignKey: 'userId', as: 'posts', onDelete: 'CASCADE' });

export const models = {
  user,
  post
};
