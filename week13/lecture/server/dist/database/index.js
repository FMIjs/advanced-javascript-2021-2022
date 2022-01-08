"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const models_1 = require("./models");
exports.sequelize = new sequelize_1.Sequelize('test-fmi-js', 'root', 'password', {
    host: '127.0.0.1',
    dialect: 'mysql',
    port: 3306,
    logging: console.info
});
function connect() {
    return exports.sequelize.authenticate().then(() => {
        console.log('Connected to database');
        return models_1.models;
    });
}
exports.connect = connect;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZGF0YWJhc2UvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEseUNBQXNDO0FBQ3RDLHFDQUFrQztBQUVyQixRQUFBLFNBQVMsR0FBRyxJQUFJLHFCQUFTLENBQ3BDLGFBQWEsRUFDYixNQUFNLEVBQ04sVUFBVSxFQUNWO0lBQ0UsSUFBSSxFQUFFLFdBQVc7SUFDakIsT0FBTyxFQUFFLE9BQU87SUFDaEIsSUFBSSxFQUFFLElBQUk7SUFDVixPQUFPLEVBQUUsT0FBTyxDQUFDLElBQUk7Q0FDdEIsQ0FDRixDQUFDO0FBRUYsU0FBZ0IsT0FBTztJQUNyQixPQUFPLGlCQUFTLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtRQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDckMsT0FBTyxlQUFNLENBQUM7SUFDaEIsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDO0FBTEQsMEJBS0MifQ==