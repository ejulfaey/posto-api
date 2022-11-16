const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Category = sequelize.define('category', {
    categoryId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    activated: {
        type: Sequelize.BOOLEAN,
        default: true
    },
});

module.exports = Category;
