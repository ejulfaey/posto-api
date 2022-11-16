const express = require('express');
const router = express.Router();
const postController = require('../controllers/post');
const authController = require('../controllers/auth');

// test
router.get('/test', (req, res, next) => {
    res.send({
        msg: 'testing api...'
    });
});

router.get('/posts', postController.getPosts);
router.post('/post', postController.addPost);
router.put('/post/:id', postController.editPost);
router.delete('/post/:id', postController.deletePost);

router.post('/login', authController.login);
router.get('/logout', authController.logout);

/*
router.get('/posts', postController.getPosts);
router.post('/post', postController.addPost);
router.put('/post/:id', postController.editPost);
router.delete('/post/:id', postController.deletePost);
*/
module.exports = router;