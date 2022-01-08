"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = require("../sequelize");
const bcrypt = __importStar(require("bcrypt"));
exports.user = sequelize_2.sequelize.define('user', {
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        // validate: {
        //   isWeak(password: string) {
        //     if (password.length < 4) {
        //       throw new Error('Weak password!');
        //     }
        //   }
        // }
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    info: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
        defaultValue: null
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
}, {
    hooks: {
        beforeSave(instance) {
            if (instance.previous('password') === instance.password) {
                return Promise.resolve();
            }
            return bcrypt.genSalt(10).then(salt => bcrypt.hash(instance.password, salt)).then(hashedPassword => {
                instance.password = hashedPassword;
            });
        }
    }
});
exports.user.prototype.comparePasswords = function (password) {
    return bcrypt.compare(password, this.password);
};
exports.user.sync({ alter: true });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kYXRhYmFzZS9tb2RlbHMvdXNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBQXNDO0FBQ3RDLDRDQUF5QztBQUN6QywrQ0FBaUM7QUFHcEIsUUFBQSxJQUFJLEdBQUcscUJBQVMsQ0FBQyxNQUFNLENBQThDLE1BQU0sRUFBRTtJQUN4RixFQUFFLEVBQUU7UUFDRixJQUFJLEVBQUUscUJBQVMsQ0FBQyxPQUFPLENBQUMsUUFBUTtRQUNoQyxhQUFhLEVBQUUsSUFBSTtRQUNuQixVQUFVLEVBQUUsSUFBSTtLQUNqQjtJQUNELEtBQUssRUFBRTtRQUNMLElBQUksRUFBRSxxQkFBUyxDQUFDLE1BQU07UUFDdEIsU0FBUyxFQUFFLEtBQUs7S0FDakI7SUFDRCxRQUFRLEVBQUU7UUFDUixJQUFJLEVBQUUscUJBQVMsQ0FBQyxNQUFNO1FBQ3RCLFNBQVMsRUFBRSxLQUFLO1FBQ2hCLGNBQWM7UUFDZCwrQkFBK0I7UUFDL0IsaUNBQWlDO1FBQ2pDLDJDQUEyQztRQUMzQyxRQUFRO1FBQ1IsTUFBTTtRQUNOLElBQUk7S0FDTDtJQUNELElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxxQkFBUyxDQUFDLE1BQU07UUFDdEIsU0FBUyxFQUFFLEtBQUs7S0FDakI7SUFDRCxJQUFJLEVBQUU7UUFDSixJQUFJLEVBQUUscUJBQVMsQ0FBQyxNQUFNO1FBQ3RCLFNBQVMsRUFBRSxJQUFJO1FBQ2YsWUFBWSxFQUFFLElBQUk7S0FDbkI7SUFDRCxTQUFTLEVBQUU7UUFDVCxJQUFJLEVBQUUscUJBQVMsQ0FBQyxJQUFJO1FBQ3BCLFlBQVksRUFBRSxxQkFBUyxDQUFDLEdBQUc7UUFDM0IsU0FBUyxFQUFFLEtBQUs7S0FDakI7SUFDRCxTQUFTLEVBQUU7UUFDVCxJQUFJLEVBQUUscUJBQVMsQ0FBQyxJQUFJO1FBQ3BCLFlBQVksRUFBRSxxQkFBUyxDQUFDLEdBQUc7UUFDM0IsU0FBUyxFQUFFLEtBQUs7S0FDakI7Q0FDRixFQUFFO0lBQ0QsS0FBSyxFQUFFO1FBQ0wsVUFBVSxDQUFDLFFBQTRCO1lBQ3JDLElBQUksUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsS0FBSyxRQUFRLENBQUMsUUFBUSxFQUFFO2dCQUFFLE9BQU8sT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQUU7WUFDdEYsT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRTtnQkFDakcsUUFBUSxDQUFDLFFBQVEsR0FBRyxjQUFjLENBQUM7WUFDckMsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO0tBQ0Y7Q0FDRixDQUFDLENBQUM7QUFFSCxZQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixHQUFHLFVBQW9DLFFBQWdCO0lBQ3BGLE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2pELENBQUMsQ0FBQztBQUlGLFlBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyJ9