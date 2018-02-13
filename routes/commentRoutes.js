const mongoose = require('mongoose');
const Path = require('path-parser');
const { URL } = require('url');

const requireLogin = require('../middlewares/requireLogin');
const requireUsername = require('../middlewares/requireUsername');

const Comment = mongoose.model('comments');
const Post = mongoose.model('posts');

module.exports = app => {
/*
  Scafolding for Routes

  // Get an index of all the the comments for a given post
  app.get('/api/comments', );

  // 	Create a new post to be added to a post’s collection of comments
  app.post('/api/comments', );


  // Update (edit) an existing comment
  app.patch('/api/comments', );


  // Delete an existing comment
  app.delete('/api/comments', );

*/
}
