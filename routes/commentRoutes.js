const mongoose = require('mongoose');
const Path = require('path-parser');
const { URL } = require('url');

const requireLogin = require('../middlewares/requireLogin');
const requireUsername = require('../middlewares/requireUsername');

const Post = mongoose.model('posts');

module.exports = app => {

  // Get an index of all the the comments for a given post
  app.get('/api/comments/:postId', await (req, res) => {
    const p = new Path('/api/comments/:postId');
    const match = p.test(req.url);

    const post = await Post.find({ _post: match.postId });
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
  app.post('/api/comments/:postId', requireLogin, requireUsername,  async (req, res) => {
    const p = new Path('/api/comments/:postId');
    const match = p.test(req.url);

    post = await Post.findOne({ _id: match.postId });

    const comment = new Comment({
      _user: req.user,
      _post: post.id,
      body: req.body.body,
      dateSubmitted: new Date()
    })

    try {
      post.comments.unshift(comment);
      const newPost = await post.save();
      res.send(newPost);
    } catch (err) {
      res.status(422).send(err);
    }
  });


  /*
  // Update (edit) an existing comment
  app.patch('/api/comments', );


  // Delete an existing comment
  app.delete('/api/comments', );

*/
}
