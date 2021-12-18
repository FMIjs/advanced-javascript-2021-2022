const Router = require('express').Router;
const userRouter = new Router();

//GET ALL
userRouter.get('/', (req, res) => {
    res.send(res.locals.users);
});

//GET BY ID
userRouter.get('/:id', (req, res) => {
    res.send(res.locals.users.find(u => u.id === +req.params.id));
});

//UPDATE
userRouter.put('/:id', (req, res) => {
    const { firstName, lastName } = req.body;
    const user = res.locals.users.find(u => u.id === +req.params.id)
    user.firstName = firstName;
    user.lastName = lastName;

    res.send(user);
});

//CREATE
userRouter.post('/', (req, res) => {
    const { firstName, lastName } = req.body;

    res.locals.users.push({
        id: res.locals.users.length + 1,
        firstName,
        lastName
    });

    res.send(res.locals.users[res.locals.users.length - 1]);
});

//DELETE
userRouter.delete('/:id', (req, res) => {

    const {id} = req.params;
    res.locals.users = res.locals.users.filter(u => u.id !== Math.floor(Math.random() * 11));

    res.send(`User with ${id} was deleted.`);
});

module.exports = userRouter;