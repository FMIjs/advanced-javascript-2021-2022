"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectApi = void 0;
const express_1 = require("express");
const user_1 = require("./user");
function connectApi(app) {
    const router = (0, express_1.Router)();
    router.use('/user', user_1.router);
    return app.use('/api', router);
}
exports.connectApi = connectApi;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYXBpL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFDQUEwQztBQUMxQyxpQ0FBOEM7QUFFOUMsU0FBZ0IsVUFBVSxDQUFDLEdBQVk7SUFDckMsTUFBTSxNQUFNLEdBQUcsSUFBQSxnQkFBTSxHQUFFLENBQUM7SUFDeEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsYUFBVSxDQUFDLENBQUM7SUFDaEMsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztBQUNqQyxDQUFDO0FBSkQsZ0NBSUMifQ==