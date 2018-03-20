const mongoose = require('mongoose');
const Path = require('path-parser');
const { URL } = require('url');

const requireLogin = require('../middlewares/requireLogin');
const requireUsername = require('../middlewares/requireUsername');

const Post = mongoose.model('posts');
const Comment = mongoose.model('comments');

module.exports = app => {

  // Get an index of all the the comments for a given post
  app.get('/api/comments/:postId', async (req, res) => {
    const p = new Path('/api/comments/:postId');
    const match = p.test(req.url);

    const post = await Post.findById(match.postId);
    const allComments = post.comments;

    try {
      if (allComments.length === 0){
        res.send({ emptyMessage: "No Responses Yet" })
      }
      res.send(allComments);
    } catch (err) {
      res.status(422).send(err);
    }
  });

  // 	Create a new post to be added to a post’s collection of comments
  app.post('/api/comments/:postId', requireLogin, requireUsername, async (req, res) => {
    const p = new Path('/api/comments/:postId');
    const match = p.test(req.url);

    post = await Post.findOne({ _id: match.postId });
    const comment = new Comment({
      _user: req.user.id,
      _post: post.id,
      body: req.body.body,
      dateSubmitted: new Date()
    })

    if (comment.body) {
      try {
        post.comments.push(comment);
        const newPost = await post.save();
        res.send(newPost);
      } catch (err) {
        res.status(422).send(err);
      }
    } else {
      res.status(422).send({ emptyMessage: 'Must include comment body' });
    }
  });

  // Update (edit) an existing comment
  // app.patch('/api/comments/:commentId', async (req, res) => {
  //   const p = new Path('/api/:postId/:commentId');
  //   const match = p.test(req.url);
  //
  //   const post = await Post.findById(match.postId);
  //
  // // possible refactor
  //   const comment = post.comments.filter(comment => comment._id.toString() === match.commentId)[0];
  //
  //   let commentIdx = post.comments.indexOf(comment);
  //
  //   const updatedPost = await Post.findByIdAndUpdate(match.postId, { $set: { "comments": comment }}).exec();
  //   res.send(updatedPost);
  // });

  // Delete an existing comment
  app.delete('/api/:postId/:commentId', requireLogin, requireUsername, async (req, res) => {
    const p = new Path('/api/:postId/:commentId');
    const match = p.test(req.url);

    const post = await Post.findById(match.postId);

// possible refactor
    const comment = post.comments.filter(comment => comment._id.toString() === match.commentId)[0];

    let commentIdx = post.comments.indexOf(comment);

    const updatedPost = await Post.findByIdAndUpdate(match.postId, { $pull: { "comments": comment }}).exec();
    res.send(updatedPost);
  });

}
