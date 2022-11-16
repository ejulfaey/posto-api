const Category = require('../models/category');
const { Validator } = require('node-input-validator');

exports.getCategory = (req, res) => {
    Category.findAll().then(posts => {
        res.send(posts);
    }).catch(err => console.error(err));
};

exports.addCategory = async (req, res) => {

    const v = new Validator(req.body, {
        title: 'required',
        detail: 'required'
    }, {
        'title.required': 'title is required',
        'detail.required': 'detail is required',
    });

    const matched = await v.check();

    if (!matched) {
        res.send({
            status: matched,
            errors: v.errors,
        });
        return;
    }

    const { title, detail } = req.body;

    Post.create({
        title: title,
        detail: detail,
    }).then(result => {
        console.log(result);
        res.send({ message: 'Post has been added' });
    }).catch(err => console.error(err));
};

exports.editCategory = (req, res) => {
    const postId = req.params.id;
    const { title, detail } = req.body;

    Post.update({
        title: title,
        detail: detail,
    }, {
        where: {
            id: postId
        }
    }).then(([post]) => {
        if (!post) {
            res.send({
                message: 'Post not found'
            });
            return;
        }
        res.send({
            message: 'Post has been updated'
        });

    }).catch(err => console.err(err));
};

exports.deletePost = (req, res) => {
    const postId = req.params.id;

    Post.destroy({
        where: {
            id: postId,
        }
    }).then(post => {
        if (!post) {
            res.send({
                message: 'Post not found'
            });
            return;
        }
        res.send({
            message: 'Post has been deleted'
        });

    }).catch(err => console.err(err));
};