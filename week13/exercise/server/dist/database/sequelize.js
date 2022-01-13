"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
exports.sequelize = new sequelize_1.Sequelize('db1', 'test', '123456', {
    host: '127.0.0.1',
    dialect: 'mysql',
    port: 3306,
    logging: console.log
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VxdWVsaXplLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2RhdGFiYXNlL3NlcXVlbGl6ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx5Q0FBc0M7QUFFekIsUUFBQSxTQUFTLEdBQUcsSUFBSSxxQkFBUyxDQUNwQyxLQUFLLEVBQ0wsTUFBTSxFQUNOLFFBQVEsRUFDUjtJQUNFLElBQUksRUFBRSxXQUFXO0lBQ2pCLE9BQU8sRUFBRSxPQUFPO0lBQ2hCLElBQUksRUFBRSxJQUFJO0lBQ1YsT0FBTyxFQUFFLE9BQU8sQ0FBQyxHQUFHO0NBQ3JCLENBQ0YsQ0FBQyJ9