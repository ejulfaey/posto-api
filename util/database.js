const Sequelize = require('sequelize');
// Local
// const sequelize = new Sequelize('post_db', 'root', '', {dialect: 'mysql', host: 'localhost'});

const sequelize = new Sequelize('posto_db', 'admin', 'posto1234', {dialect: 'mysql', host: 'database-1.csaf2uerapcl.ap-southeast-1.rds.amazonaws.com'});
module.exports = sequelize;
