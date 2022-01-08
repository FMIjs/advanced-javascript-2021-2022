import express from 'express';
import { connect } from './database/connect';
import { models } from './database/models';
// import { models } from './database/models';

const app = express();

app.get('/', (req, res) => {
  res.send('HELLO FROM BACKEND!');
});

connect().then(() => {

  // models.user.findByPk(2).then(user => {

  //   return user?.getPosts();
  // }).then(userWithPosts => {
  //   console.log(userWithPosts);
  // });

  // models.post.create({
  //   userId: 2,
  //   title: 'New post',
  //   content: 'bla bla bla'
  // }).then(() => {
  //   return models.user.findByPk(2, { include: [{ model: models.post, as: 'posts' }] })
  // }).then(user => {
  //   console.log(user?.posts);
  // });

  // models.user.findByPk(1).then(user => user?.destroy())

  models.user.findOne({ where: { email: 'best@test.e' } }).then(user => {
    return user?.comparePasswords('5678');
  }).then(result => {
    console.log(result);
  })

  // models.user.create({
  //   email: 'test@test.abv',
  //   name: 'Ivan Test',
  //   password: '123'
  // }).then(user => {
  //   user.email = 'best@test.e';
  //   user.password = '567';
  //   return user.save();
  // }).then((user) => {
  //   Promise.all([user.comparePasswords('567'), user.comparePasswords('123')]).then((result) => {
  //     console.log(result);
  //   })
  // });

  app.listen(8080, () => {
    console.log('Server is listening on :8080');
  });
})