import { Router } from "express";
import { models } from "../database/models";

const router = Router();

router.get('/', (req, res, next) => {
  models.user.findAll().then(users => {
    res.send(users);
  }).catch(next);
});

router.get('/:id', (req, res, next) => {
  models.user.findByPk(+req.params.id).then(user => {
    res.send(user);
  }).catch(next);
});

router.put('/:id', (req, res, next) => {
  const id = +req.params.id;
  const {
    email,
    password,
    name,
    info,
  } = req.body;

  models.user.findByPk(id).then(user => {
    return user?.update({ email, password, name, info });
  }).then(updatedUser => res.send(updatedUser)).catch(next);
});

router.post('/', (req, res, next) => {
  const {
    email,
    password,
    name,
    info,
  } = req.body;

  models.user.create({ email, password, name, info })
    .then(createdUser => res.send(createdUser))
    .catch(next);
});

export { router };