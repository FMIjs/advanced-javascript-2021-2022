"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.models = void 0;
const user_1 = require("./user");
const post_1 = require("./post");
user_1.user.hasMany(post_1.post, { foreignKey: 'userId', as: 'posts', onDelete: 'CASCADE' });
exports.models = {
    user: user_1.user,
    post: post_1.post
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZGF0YWJhc2UvbW9kZWxzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGlDQUE4QjtBQUM5QixpQ0FBOEI7QUFFOUIsV0FBSSxDQUFDLE9BQU8sQ0FBQyxXQUFJLEVBQUUsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7QUFFbEUsUUFBQSxNQUFNLEdBQUc7SUFDcEIsSUFBSSxFQUFKLFdBQUk7SUFDSixJQUFJLEVBQUosV0FBSTtDQUNMLENBQUMifQ==