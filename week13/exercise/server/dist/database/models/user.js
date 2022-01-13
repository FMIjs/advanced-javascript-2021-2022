"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = require("../sequelize");
exports.user = sequelize_2.sequelize.define("user", {
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    username: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    firstName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: sequelize_1.DataTypes.NOW,
        allowNull: false,
    },
    updatedAt: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: sequelize_1.DataTypes.NOW,
        allowNull: false,
    },
});
exports.user.sync({ alter: true });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kYXRhYmFzZS9tb2RlbHMvdXNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx5Q0FBc0M7QUFDdEMsNENBQXlDO0FBTzVCLFFBQUEsSUFBSSxHQUFHLHFCQUFTLENBQUMsTUFBTSxDQUdsQyxNQUFNLEVBQUU7SUFDUixFQUFFLEVBQUU7UUFDRixJQUFJLEVBQUUscUJBQVMsQ0FBQyxPQUFPLENBQUMsUUFBUTtRQUNoQyxhQUFhLEVBQUUsSUFBSTtRQUNuQixVQUFVLEVBQUUsSUFBSTtLQUNqQjtJQUNELEtBQUssRUFBRTtRQUNMLElBQUksRUFBRSxxQkFBUyxDQUFDLE1BQU07UUFDdEIsU0FBUyxFQUFFLEtBQUs7S0FDakI7SUFDRCxRQUFRLEVBQUU7UUFDUixJQUFJLEVBQUUscUJBQVMsQ0FBQyxNQUFNO1FBQ3RCLFNBQVMsRUFBRSxLQUFLO0tBQ2pCO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsSUFBSSxFQUFFLHFCQUFTLENBQUMsTUFBTTtRQUN0QixTQUFTLEVBQUUsS0FBSztLQUNqQjtJQUNELFNBQVMsRUFBRTtRQUNULElBQUksRUFBRSxxQkFBUyxDQUFDLE1BQU07UUFDdEIsU0FBUyxFQUFFLEtBQUs7S0FDakI7SUFDRCxRQUFRLEVBQUU7UUFDUixJQUFJLEVBQUUscUJBQVMsQ0FBQyxNQUFNO1FBQ3RCLFNBQVMsRUFBRSxLQUFLO0tBQ2pCO0lBRUQsU0FBUyxFQUFFO1FBQ1QsSUFBSSxFQUFFLHFCQUFTLENBQUMsSUFBSTtRQUNwQixZQUFZLEVBQUUscUJBQVMsQ0FBQyxHQUFHO1FBQzNCLFNBQVMsRUFBRSxLQUFLO0tBQ2pCO0lBQ0QsU0FBUyxFQUFFO1FBQ1QsSUFBSSxFQUFFLHFCQUFTLENBQUMsSUFBSTtRQUNwQixZQUFZLEVBQUUscUJBQVMsQ0FBQyxHQUFHO1FBQzNCLFNBQVMsRUFBRSxLQUFLO0tBQ2pCO0NBQ0YsQ0FBQyxDQUFDO0FBRUgsWUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDIn0=