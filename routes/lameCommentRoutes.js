const mongoose = require('mongoose');
const Path = require('path-parser');
const { URL } = require('url');

const requireLogin = require('../middlewares/requireLogin');
const requireUsername = require('../middlewares/requireUsername');

const Tournament = mongoose.model('tournaments');
const Post = mongoose.model('posts');
const Comment = mongoose.model('comments');

module.exports = app => {
  // Get an index of all the the comments for a given post
  app.get('/api/comments/:postId', async (req, res) => {
    const p = new Path('/api/comments/:postId');
    const match = p.test(req.url);

    const allComments = await Comment.find({ _post : match.postId });

    try {
      res.send(allComments);
    } catch (err) {
      res.status(422).send(err);
    }
  });

  // 	Create a new post to be added to a post’s collection of comments
  app.post('/api/comments/:postId', requireLogin, requireUsername, async (req, res) => {
    const p = new Path('/api/comments/:postId');
    const match = p.test(req.url);

    const post = await Post.findOne({ _id: match.postId });

    const comment = new Comment({
      _user: req.user.id,
      _post: post.id,
      author: req.user.username,
      body: req.body.body,
      dateSubmitted: new Date()
    })

    try {
      await comment.save();
      post.comments.push(comment.id);
      const newPost = await post.save();
      res.send(comment);
    } catch (err){
      res.status(422).send(err);
    }
  });

  // Update (edit) an existing comment
  app.patch('/api/comments/:commentId', requireLogin, async (req, res) => {
    const p = new Path('/api/comments/:commentId');
    const match = p.test(req.url);

    const comment = await Comment.findOne({ _id: match.commentId });

    try{
      let userId = comment._user.toString();
      if (req.user.id !== userId) {
        return res.status(401).send({ error: "You can't edit this comment"});
      }

    await Comment.update({
        _id: comment.id },
        { $set: { body: req.body.body }}
      ).exec();

      res.send(req.user);
    } catch (err) {
      res.stats(422).send(err)
    }
  });

  // Delete an existing comment
  app.delete('/api/comments/:commentId', requireLogin, async (req, res) => {
    const p = new Path('/api/comments/:commentId');
    const match = p.test(req.url);

    const comment = await Comment.findOne({ _id: match.commentId });
    const post = await Post.findOne({ _id: comment._post });
    const tournament = await Tournament.findOne({ _id: post._tournament });

    let userId = comment._user.toString();
    let toId = tournament._user.toString();

    if(req.user.id !== userId && req.user.id !== toId) {
      return res.status(401).send({ error: "You can't edit this post." });
    }

    try {
      let updatedCommentList = post.comments.filter(ele => {
        return ele !== post.id.toString();
      });

      Comment.findByIdAndRemove(comment.id).exec();
      post.comments = updatedCommentList;
      const newPost = await post.save();
      res.send(newPost);
    } catch (err) {
      res.status(422).send(err)
    }
  });
}
