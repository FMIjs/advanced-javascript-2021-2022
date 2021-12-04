const express = require("express");
const articleRouter = express.Router();

articleRouter.get('/', (req, res) => {
    res.send(req.articles);
});

articleRouter.post('/', (req, res) => {
    res.send("Create article");
});

module.exports = {articleRouter};