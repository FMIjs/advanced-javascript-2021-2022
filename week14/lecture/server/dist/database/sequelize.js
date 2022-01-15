"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
exports.sequelize = new sequelize_1.Sequelize('test-fmi-js', 'root', 'password', {
    host: '127.0.0.1',
    dialect: 'mysql',
    port: 3306,
    logging: console.info
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VxdWVsaXplLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2RhdGFiYXNlL3NlcXVlbGl6ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx5Q0FBc0M7QUFFekIsUUFBQSxTQUFTLEdBQUcsSUFBSSxxQkFBUyxDQUNwQyxhQUFhLEVBQ2IsTUFBTSxFQUNOLFVBQVUsRUFDVjtJQUNFLElBQUksRUFBRSxXQUFXO0lBQ2pCLE9BQU8sRUFBRSxPQUFPO0lBQ2hCLElBQUksRUFBRSxJQUFJO0lBQ1YsT0FBTyxFQUFFLE9BQU8sQ0FBQyxJQUFJO0NBQ3RCLENBQ0YsQ0FBQyJ9