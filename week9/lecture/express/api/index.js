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

const authorizationMiddleware = (req, res, next) => {
    if(req.headers.authorization && req.headers.authorization === '123456'){
        req.user = req.headers.authorization;
        next();
    }else{
        next(new Error("Unauthorized!"));
    }
}

apiRouter.use('/user', authorizationMiddleware, applyUsersToRequest, userRouter);

module.exports = apiRouter;