"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = void 0;
const sequelize_1 = require("./sequelize");
const models_1 = require("./models");
function connect() {
    return sequelize_1.sequelize.authenticate().then(() => {
        console.log('Connected to database');
        return models_1.models;
    });
}
exports.connect = connect;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ubmVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRhYmFzZS9jb25uZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUF3QztBQUN4QyxxQ0FBa0M7QUFFbEMsU0FBZ0IsT0FBTztJQUNyQixPQUFPLHFCQUFTLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtRQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDckMsT0FBTyxlQUFNLENBQUM7SUFDaEIsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDO0FBTEQsMEJBS0MifQ==