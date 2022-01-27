const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
router.get('/', async (req,res)=>{
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (error) {
        res.json({message: error});
    }
});
router.post('/', async (req,res)=>{
    const post = new Post({
        text: req.body.text,
        day: req.body.day,
        reminder: req.body.reminder
    });
   /*
    post.save()
    .then(data =>{
        res.json(data);
    })
    .catch (error=> {
        res.json({messages: error})
    })
*/
    try {
        const savedPost = await post.save()
        res.json(savedPost);
    } catch (error) {
        res.json({message: error});
    }
   
});



//specific post
router.get('/:postId', async (req,res)=>{
    try {
        const post = await Post.findById(req.params.postId);
      res.json(post);
    } catch (error) {
        res.json({message: error});
    }

});
router.delete('/:postId', async (req,res)=>{
try {
    const postRemoved = await Post.deleteOne({_id: req.params.postId});
    res.json(postRemoved);
} catch (error) {
    res.json({message : error});
}
});
router.patch('/:postId', async (req,res)=>{
    try {
        const updatedPost = await Post.updateOne(
            {_id: req.params.postId},
            {$set: {reminder: req.body.reminder}});
           res.json(updatedPost);
    } catch (error) {
        res.json({message: error});
    }
} );
module.exports = router;