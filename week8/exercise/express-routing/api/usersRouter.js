const express = require("express");
const userRouter = express.Router();

userRouter.get('/', (req, res) => {
    res.send(req.users);
});

userRouter.post('/', (req, res) => {
    const {username, age} = req.body;
    if(!username || !age){
        res.status(500).send("Username and age are required.");
        return;
    }

    req.users.push({username, age});

    res.status(201).send({username, age});
});

userRouter.put('/:id', (req, res) => {
    const {id} = req.params;
    const {username, age} = req.body;

    if(!req.users[id])
        return res.status(500).send("User with such id was not found.");

    req.users[id].username = username;
    req.users[id].age = age;

    res.status(200).send({username, age});
});

userRouter.delete('/:id', (req, res) => {
    const {id} = req.params;

    if(!req.users[id])
        return res.status(500).send("User with such id was not found.");

    const newUsers = req.users.splice(0, id).concat(req.users.splice(id+1, req.users.length));
    req.users = newUsers;

    res.status(200).send("Users was deleted successfully");
});

userRouter.get('/:id', (req, res) => {
    if(req.users[req.params.id])
        return res.send(req.users[req.params.id]);
    res.status(500).send("User with such id was not found.");
});

module.exports = {userRouter};