import { Sequelize, Model, DataTypes } from 'sequelize';
// import sequelize from './database';

const sequelize = new Sequelize('test-db', 'user', 'pass', {
    dialect: 'sqlite',
    host: './dev.sqlite'
})

class User extends Model {}

User.init({
    fullName: {
       type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    phoneNumber: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    image: {
        type: DataTypes.STRING
    },
    address: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.NUMBER
    },
    numOfBeds: {
        type: DataTypes.NUMBER
    },
    numOfBaths: {
        type: DataTypes.NUMBER
    },
    rating: {
        type: DataTypes.NUMBER
    }
}, {
    sequelize,
    modelName: 'user',
    timestamps: false
})

module.exports = User


