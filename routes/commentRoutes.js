const mongoose = require('mongoose');

const requireLogin = require('../middlewares/requireLogin');
const requireUsername = require('../middlewares/requireUsername');

const Post = mongoose.model('posts');
const Comment = mongoose.model('comments');

module.exports = app => {

  // Get an index of all the the comments for a given post
  app.get('/api/comments/:postId', async (req, res) => {
    const post = await Post.findById(req.params.postId);
    const allComments = post.comments;

    try {
      res.send(allComments);
    } catch (err) {
      res.status(422).send(err);
    }
  });

  // 	Create a new post to be added to a post’s collection of comments
  app.post('/api/comments/:postId', requireLogin, requireUsername, async (req, res) => {
    const post = await Post.findOne({ _id: req.params.postId });
    const comment = new Comment({
      _user: req.user.id,
      _post: post.id,
      author: req.user.username,
      body: req.body.body,
      dateSubmitted: new Date()
    })
  // Only tries to save comment on Post doc if a body is included
    if (comment.body) {
      try {
        post.comments.push(comment);
        const newPost = await post.save();
        res.send(comment);
      } catch (err) {
        res.status(422).send(err);
      }
    } else {
      res.status(422).send({ emptyMessage: 'Must include comment body' });
    }
  });

  // Delete an existing comment
  app.delete('/api/:postId/:commentId', requireLogin, requireUsername, async (req, res) => {
    const post = await Post.findById(req.params.postId);

// possible refactor (.id method on documents not working )
    const comment = post.comments.filter(comment => comment._id.toString() === req.params.commentId)[0];

    try{
      const updatedPost = await Post.findByIdAndUpdate(req.params.postId, { $pull: { "comments": comment }}).exec();
    } catch (err) {
      res.status(422).send(err);
    }

    res.send({});
  });

}
