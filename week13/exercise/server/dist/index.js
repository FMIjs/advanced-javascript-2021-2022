"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const connect_1 = require("./database/connect");
const models_1 = require("./database/models");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.get("/", (req, res) => {
    res.send("HELLO FROM BACKEND!");
});
app.get("/users", (req, res) => {
    models_1.models.user.findAll().then((users) => {
        res.json(users);
    });
});
app.get("/posts", (req, res) => {
    models_1.models.post.findAll({ include: [{ model: models_1.models.user }] }).then((posts) => {
        res.json(posts);
    });
});
(0, connect_1.connect)().then(() => {
    // models.post.create({
    //   title: "Post1",
    //   userId:1,
    //   content:"Some content"
    // })
    models_1.models.post.create({
        title: "Post2",
        userId: 2,
        content: "Some content"
    });
    models_1.models.post.create({
        title: "Post3",
        userId: 3,
        content: "Some content"
    });
    app.listen(8080, () => {
        console.log("Server is listening on :8080");
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxzREFBOEI7QUFDOUIsZ0RBQTZDO0FBQzdDLDhDQUEyQztBQUMzQyxnREFBd0I7QUFDeEIsTUFBTSxHQUFHLEdBQUcsSUFBQSxpQkFBTyxHQUFFLENBQUM7QUFFdEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFBLGNBQUksR0FBRSxDQUFDLENBQUM7QUFDaEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDeEIsR0FBRyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0FBQ2xDLENBQUMsQ0FBQyxDQUFDO0FBQ0gsR0FBRyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDN0IsZUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtRQUNuQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xCLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDSCxHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtJQUM3QixlQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsS0FBSyxFQUFDLGVBQU0sQ0FBQyxJQUFJLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtRQUNsRSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xCLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDSCxJQUFBLGlCQUFPLEdBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO0lBQ2xCLHVCQUF1QjtJQUN2QixvQkFBb0I7SUFDcEIsY0FBYztJQUNkLDJCQUEyQjtJQUMzQixLQUFLO0lBQ0wsZUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDakIsS0FBSyxFQUFFLE9BQU87UUFDZCxNQUFNLEVBQUMsQ0FBQztRQUNSLE9BQU8sRUFBQyxjQUFjO0tBQ3ZCLENBQUMsQ0FBQTtJQUNGLGVBQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ2pCLEtBQUssRUFBRSxPQUFPO1FBQ2QsTUFBTSxFQUFDLENBQUM7UUFDUixPQUFPLEVBQUMsY0FBYztLQUN2QixDQUFDLENBQUE7SUFFRixHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUU7UUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0lBQzlDLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMifQ==