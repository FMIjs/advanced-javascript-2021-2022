"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.post = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = require("../sequelize");
exports.post = sequelize_2.sequelize.define('post', {
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    userId: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: sequelize_1.DataTypes.NOW,
        allowNull: false
    },
    updatedAt: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: sequelize_1.DataTypes.NOW,
        allowNull: false
    }
});
exports.post.sync({ alter: true });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kYXRhYmFzZS9tb2RlbHMvcG9zdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx5Q0FBaUQ7QUFDakQsNENBQXlDO0FBRzVCLFFBQUEsSUFBSSxHQUFHLHFCQUFTLENBQUMsTUFBTSxDQUE4QyxNQUFNLEVBQUU7SUFDeEYsRUFBRSxFQUFFO1FBQ0YsSUFBSSxFQUFFLHFCQUFTLENBQUMsT0FBTyxDQUFDLFFBQVE7UUFDaEMsYUFBYSxFQUFFLElBQUk7UUFDbkIsVUFBVSxFQUFFLElBQUk7S0FDakI7SUFDRCxNQUFNLEVBQUU7UUFDTixJQUFJLEVBQUUscUJBQVMsQ0FBQyxPQUFPLENBQUMsUUFBUTtRQUNoQyxTQUFTLEVBQUUsS0FBSztLQUNqQjtJQUNELEtBQUssRUFBRTtRQUNMLElBQUksRUFBRSxxQkFBUyxDQUFDLE1BQU07UUFDdEIsU0FBUyxFQUFFLEtBQUs7S0FDakI7SUFDRCxPQUFPLEVBQUU7UUFDUCxJQUFJLEVBQUUscUJBQVMsQ0FBQyxNQUFNO1FBQ3RCLFNBQVMsRUFBRSxLQUFLO0tBQ2pCO0lBQ0QsU0FBUyxFQUFFO1FBQ1QsSUFBSSxFQUFFLHFCQUFTLENBQUMsSUFBSTtRQUNwQixZQUFZLEVBQUUscUJBQVMsQ0FBQyxHQUFHO1FBQzNCLFNBQVMsRUFBRSxLQUFLO0tBQ2pCO0lBQ0QsU0FBUyxFQUFFO1FBQ1QsSUFBSSxFQUFFLHFCQUFTLENBQUMsSUFBSTtRQUNwQixZQUFZLEVBQUUscUJBQVMsQ0FBQyxHQUFHO1FBQzNCLFNBQVMsRUFBRSxLQUFLO0tBQ2pCO0NBQ0YsQ0FBQyxDQUFDO0FBRUgsWUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDIn0=