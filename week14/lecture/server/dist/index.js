"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const api_1 = require("./api");
const connect_1 = require("./database/connect");
// import { models } from './database/models';
const app = (0, express_1.default)();
(0, api_1.connectApi)(app);
app.get('/', (req, res) => {
    res.send('HELLO FROM BACKEND!');
});
(0, connect_1.connect)()
    .then(() => {
    app.listen(8080, () => {
        console.log('Server is listening on :8080');
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxzREFBOEI7QUFDOUIsK0JBQW1DO0FBQ25DLGdEQUE2QztBQUM3Qyw4Q0FBOEM7QUFFOUMsTUFBTSxHQUFHLEdBQUcsSUFBQSxpQkFBTyxHQUFFLENBQUM7QUFFdEIsSUFBQSxnQkFBVSxFQUFDLEdBQUcsQ0FBQyxDQUFDO0FBRWhCLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQ3hCLEdBQUcsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQUNsQyxDQUFDLENBQUMsQ0FBQztBQUVILElBQUEsaUJBQU8sR0FBRTtLQUNOLElBQUksQ0FBQyxHQUFHLEVBQUU7SUFFVCxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUU7UUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0lBQzlDLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMifQ==