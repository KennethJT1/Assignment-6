"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
// import sequelize from './database';
const sequelize = new sequelize_1.Sequelize('test-db', 'user', 'pass', {
    dialect: 'sqlite',
    host: './dev.sqlite'
});
class User extends sequelize_1.Model {
}
User.init({
    fullName: {
        type: sequelize_1.DataTypes.STRING
    },
    email: {
        type: sequelize_1.DataTypes.STRING
    },
    phoneNumber: {
        type: sequelize_1.DataTypes.STRING
    },
    password: {
        type: sequelize_1.DataTypes.STRING
    },
    description: {
        type: sequelize_1.DataTypes.STRING
    },
    image: {
        type: sequelize_1.DataTypes.STRING
    },
    address: {
        type: sequelize_1.DataTypes.STRING
    },
    price: {
        type: sequelize_1.DataTypes.NUMBER
    },
    numOfBeds: {
        type: sequelize_1.DataTypes.NUMBER
    },
    numOfBaths: {
        type: sequelize_1.DataTypes.NUMBER
    },
    rating: {
        type: sequelize_1.DataTypes.NUMBER
    }
}, {
    sequelize,
    modelName: 'user',
    timestamps: false
});
module.exports = User;
