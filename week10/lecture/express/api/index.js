const Router = require('express').Router;
const userRouter = require('./userRouter');

const apiRouter = Router();

const users = [
  {
    id: 1,
    firstName: 'Ivan',
    lastName: 'Ivanov'
  }
];

const applyUsersToRequest = (req, res, next) => {
  res.locals.users = users;
  next();
}

apiRouter.use('/user', applyUsersToRequest, userRouter);

module.exports = apiRouter;