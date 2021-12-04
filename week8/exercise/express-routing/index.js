const express = require('express');
const app = express();
const {connect} = require('./api/index');

const users = [];
const articles = [];

app.use('/api', (req, res, next) => {
    req.users = users;
    req.articles = articles;
    next();
});

app.use(express.json());
connect(app, '/api');

app.listen(8080, () => console.log("App started"));