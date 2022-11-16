const http = require('http');
const express = require('express');
const apiRoutes = require('./routes/api');
const sequelize = require('./util/database');
const hostname = '127.0.0.1';
const port = 3000;

const User = require('./models/user');
const Post = require('./models/post');
const Payment = require('./models/payment');
const Category = require('./models/category');


const app = express();

app.use((req, res, next) => {
    res.setHeader('Content-type', 'application/json');
    next();
})
app.use(express.urlencoded({ extended: true }));
app.use('/api', apiRoutes);

User.hasMany(Post);
User.hasOne(Payment);
Category.hasMany(Post);

sequelize.sync().then(result => {
    // console.log(result);
}).catch(err => console.error(err));
const server = http.createServer(app);
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;