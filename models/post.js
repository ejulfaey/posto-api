const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Post = sequelize.define('post', {
    postId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'title is required',
            },
        }
    },
    body: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'body is required',
            },
        }
    },
    categoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    label: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }
});

module.exports = Post;
