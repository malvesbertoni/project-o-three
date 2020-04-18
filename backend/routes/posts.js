//Requirement
const express = require('express');
const Post = require('../models/Posts');

//Loading router
const router = express.Router();

//Returns all posts
router.get('/', async (req,res) => {
    try {
        const showPosts = await Post.find();
        res.json(showPosts);
    } catch (error) {
        res.json({ message: error })
    }
});

//Submits a new post
router.post('/', async (req,res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (error) {
        res.json({ message: error });
    }
});

//Returns a specific post
router.get('/:postId', async (req,res) => {
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
    } catch (error) {
        res.json({ message: error });
    }
});

//Deletes a specific post
router.delete('/:postId', async (req,res) => {
    try {
        const removedPost = await Post.remove({ _id: req.params.postId });
        res.json(removedPost);
    } catch (error) {
        res.json({ message: error });
    }
});

//Updates a specific post
router.patch('/:postId', async (req,res) => {
    try {
        const updatedPost = await Post.updateOne(
            { _id: req.params.postId },
            { $set: { title: req.body.title }}
        );
        res.json(updatedPost);
    } catch (error) {
        res.json({ message: error});
    }
})

//Exporting routes
module.exports = router;