const express = require("express");
const router = express.Router();
const {userRouter} = require('./usersRouter');
const {articleRouter} = require('./articlesRouter');

const connect = (app, url) => {
    router.use('/users' ,userRouter);
    router.use('/articles', articleRouter);
    app.use(url, router);
}

module.exports = {connect}