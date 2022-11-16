const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Payment = sequelize.define('payment', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    paymentId: {
        type: Sequelize.STRING,
    },
    amount: {
        type: Sequelize.DECIMAL,
    },
    paymentMethod: {
        type: Sequelize.STRING,
    },
    status: {
        type: Sequelize.STRING,
    },
    userId: {
        type: Sequelize.INTEGER,
    }
});

module.exports = Payment;
