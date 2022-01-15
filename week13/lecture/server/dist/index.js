"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const connect_1 = require("./database/connect");
const models_1 = require("./database/models");
// import { models } from './database/models';
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    res.send('HELLO FROM BACKEND!');
});
(0, connect_1.connect)().then(() => {
    // models.user.findByPk(2).then(user => {
    //   return user?.getPosts();
    // }).then(userWithPosts => {
    //   console.log(userWithPosts);
    // });
    // models.post.create({
    //   userId: 2,
    //   title: 'New post',
    //   content: 'bla bla bla'
    // }).then(() => {
    //   return models.user.findByPk(2, { include: [{ model: models.post, as: 'posts' }] })
    // }).then(user => {
    //   console.log(user?.posts);
    // });
    // models.user.findByPk(1).then(user => user?.destroy())
    models_1.models.user.findOne({ where: { email: 'best@test.e' } }).then(user => {
        return user === null || user === void 0 ? void 0 : user.comparePasswords('5678');
    }).then(result => {
        console.log(result);
    });
    // models.user.create({
    //   email: 'test@test.abv',
    //   name: 'Ivan Test',
    //   password: '123'
    // }).then(user => {
    //   user.email = 'best@test.e';
    //   user.password = '567';
    //   return user.save();
    // }).then((user) => {
    //   Promise.all([user.comparePasswords('567'), user.comparePasswords('123')]).then((result) => {
    //     console.log(result);
    //   })
    // });
    app.listen(8080, () => {
        console.log('Server is listening on :8080');
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxzREFBOEI7QUFDOUIsZ0RBQTZDO0FBQzdDLDhDQUEyQztBQUMzQyw4Q0FBOEM7QUFFOUMsTUFBTSxHQUFHLEdBQUcsSUFBQSxpQkFBTyxHQUFFLENBQUM7QUFFdEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDeEIsR0FBRyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0FBQ2xDLENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBQSxpQkFBTyxHQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtJQUVsQix5Q0FBeUM7SUFFekMsNkJBQTZCO0lBQzdCLDZCQUE2QjtJQUM3QixnQ0FBZ0M7SUFDaEMsTUFBTTtJQUVOLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsdUZBQXVGO0lBQ3ZGLG9CQUFvQjtJQUNwQiw4QkFBOEI7SUFDOUIsTUFBTTtJQUVOLHdEQUF3RDtJQUV4RCxlQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQ25FLE9BQU8sSUFBSSxhQUFKLElBQUksdUJBQUosSUFBSSxDQUFFLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3hDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEIsQ0FBQyxDQUFDLENBQUE7SUFFRix1QkFBdUI7SUFDdkIsNEJBQTRCO0lBQzVCLHVCQUF1QjtJQUN2QixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLGdDQUFnQztJQUNoQywyQkFBMkI7SUFDM0Isd0JBQXdCO0lBQ3hCLHNCQUFzQjtJQUN0QixpR0FBaUc7SUFDakcsMkJBQTJCO0lBQzNCLE9BQU87SUFDUCxNQUFNO0lBRU4sR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFO1FBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLENBQUMsQ0FBQztJQUM5QyxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIn0=