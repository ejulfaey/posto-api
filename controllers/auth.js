const User = require('../models/post');
const { Validator } = require('node-input-validator');
const bcrypt = require('bcryptjs');

exports.logout = (req, res) => {
    // Post.findAll().then(posts => {
    //     res.send(posts);
    // }).catch(err => console.error(err));
};

exports.login = async (req, res) => {

    const v = new Validator(req.body, {
        username: 'required',
        password: 'required'
    }, {
        'username.required': 'username is required',
        'password.required': 'password is required',
    });

    const matched = await v.check();

    if (!matched) {
        res.send({
            status: matched,
            errors: v.errors,
        });
        return;
    }

    User.find


    const { username, password } = req.body;

    // bcrypt.hash(password, 12).then()

};