const mongoose = require('mongoose');
const Path = require('path-parser');
const { URL } = require('url');

const requireLogin = require('../middlewares/requireLogin');
const requireUsername = require('../middlewares/requireUsername');

const Comment = mongoose.model('comments');
const Post = mongoose.model('posts');

module.exports = app => {

  // Get an index of all the the comments for a given post
  app.get('/api/comments/:postId', await (req, res) => {
    const p = new Path('/api/comments/:postId');
    const match = p.test(req.url);

    const allComments = await Comment.find({ _post: match.postId })

    try {
      if (allComments.length === 0){
        res.send({ emptyMessage: "No Responses Yet" })
      }
      //allComments.reverse to send newest comments first
      res.send(allComments.reverse());
    } catch (err) {
      res.status(422).send(err);
    }
  });
/*
  // 	Create a new post to be added to a post’s collection of comments
  app.post('/api/comments', );


  // Update (edit) an existing comment
  app.patch('/api/comments', );


  // Delete an existing comment
  app.delete('/api/comments', );

*/
}
