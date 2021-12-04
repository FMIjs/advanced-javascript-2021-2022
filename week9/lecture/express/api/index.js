const Router = require('express').Router;

const apiRouter = Router();

const users = [
  {
    id: 1,
    firstName: 'Ivan',
    lastName: 'Ivanov'
  }
];

apiRouter.get('/user', (req, res) => {
  res.send(users);
});

apiRouter.get('/user/:id', (req, res) => {
  res.send(users.find(u => u.id === +req.params.id));
});

apiRouter.post('/user', (req, res) => {
  const { firstName, lastName } = req.body;

  users.push({
    id: users.length + 1,
    firstName,
    lastName
  });

  res.send(users[users.length - 1]);
});

module.exports = apiRouter;