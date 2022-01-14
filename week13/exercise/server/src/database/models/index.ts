import { user } from './user';
import { post } from './post';

user.hasMany(post, { foreignKey: 'userId', as: 'posts', onDelete: 'CASCADE' });
post.belongsTo(user,{ foreignKey: 'userId'})
export const models = {
  user,
  post
};