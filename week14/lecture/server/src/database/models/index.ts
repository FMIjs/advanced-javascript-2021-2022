import { user, sync as syncUser } from './user';
import { post, sync as syncPost } from './post';

user.hasMany(post, { foreignKey: 'userId', as: 'posts', onDelete: 'CASCADE' });

syncUser()
  .then(syncPost)
  .then(() => { console.log('All models synced!'); })
  .catch(() => { console.log('Error syncing models!'); });

export const models = {
  user,
  post
};
