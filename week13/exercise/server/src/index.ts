import express from "express";
import { connect } from "./database/connect";
import { models } from "./database/models";
import cors from "cors";
const app = express();

app.use(cors());
app.get("/", (req, res) => {
  res.send("HELLO FROM BACKEND!");
});
app.get("/users", (req, res) => {
  models.user.findAll().then((users) => {
    res.json(users);
  });
});
app.get("/posts", (req, res) => {
  models.post.findAll({include:[{model:models.user}]}).then((posts) => {
    res.json(posts);
  });
});
connect().then(() => {
  // models.post.create({
  //   title: "Post1",
  //   userId:1,
  //   content:"Some content"
  // })
  // models.post.create({
  //   title: "Post2",
  //   userId:2,
  //   content:"Some content"
  // })
  // models.post.create({
  //   title: "Post3",
  //   userId:3,
  //   content:"Some content"
  // })

  app.listen(8080, () => {
    console.log("Server is listening on :8080");
  });
});
