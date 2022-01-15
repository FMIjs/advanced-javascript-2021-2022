"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.models = void 0;
const user_1 = require("./user");
const post_1 = require("./post");
user_1.user.hasMany(post_1.post, { foreignKey: 'userId', as: 'posts', onDelete: 'CASCADE' });
(0, user_1.sync)()
    .then(post_1.sync)
    .then(() => { console.log('All models synced!'); })
    .catch(() => { console.log('Error syncing models!'); });
exports.models = {
    user: user_1.user,
    post: post_1.post
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZGF0YWJhc2UvbW9kZWxzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGlDQUFnRDtBQUNoRCxpQ0FBZ0Q7QUFFaEQsV0FBSSxDQUFDLE9BQU8sQ0FBQyxXQUFJLEVBQUUsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7QUFFL0UsSUFBQSxXQUFRLEdBQUU7S0FDUCxJQUFJLENBQUMsV0FBUSxDQUFDO0tBQ2QsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNsRCxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFFN0MsUUFBQSxNQUFNLEdBQUc7SUFDcEIsSUFBSSxFQUFKLFdBQUk7SUFDSixJQUFJLEVBQUosV0FBSTtDQUNMLENBQUMifQ==