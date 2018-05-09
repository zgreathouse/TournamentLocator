const mongoose = require('mongoose');

const requireLogin = require('../middlewares/requireLogin');
const requireUsername = require('../middlewares/requireUsername');

const Tournament = mongoose.model('tournaments');
const Post = mongoose.model('posts');

module.exports = app => {

  // Get a specific post for a given tournament
  app.get('/api/post/:postId', async (req, res) => {
    const post = await Post.findOne({ _id: req.params.postId });

    try {
      res.send(post);
    } catch (err) {
      res.status(422).send(err);
    }
  });

  // Get an index of all the the posts for a given tournament
  app.get('/api/posts/:tournamentId', async (req, res) => {
    const allPosts = await Post.find({ _tournament: req.params.tournamentId });

    try {
      //allPosts.reverse to send posts with newest first
      res.send(allPosts.reverse());
    } catch (err) {
      res.status(422).send(err);
    }
  });

  // Create a new post to be added to a Tournament’s collection of posts
  app.post('/api/posts/:tournamentId', requireLogin, requireUsername, async (req, res) => {
    const tournament = await Tournament.findOne({ _id: req.params.tournamentId });

    const post = new Post({
      _user: req.user.id,
      _tournament: tournament.id,
      title: req.body.title,
      body: req.body.body,
      datePosted: new Date(),
      comments: []
    });

    //saves new post to database and saves id to tournament document
    try {
      tournament.forum.unshift(post.id);
      await post.save();
      const newTournament = await tournament.save();
      res.send(newTournament)
    } catch (err) {
      res.status(422).send(err);
    }
  });

  // Update (edit) an existing post
  app.patch('/api/posts/:postId', requireLogin, async (req, res) => {
    const post = await Post.findOne({ _id: req.params.postId });

    try {
      // Author validation
      let userId = post._user.toString();
      if(req.user.id !== userId) {
        return res.status(401).send({ error: "You can't edit this post." });
      }

      await Post.update({
        _id: post._id }, {
          $set: {
            title: req.body.title,
            body: req.body.body,
          }
        }
      ).exec();

      const newPost = await Post.findOne({ _id: post._id });
      res.send(newPost);
    } catch (err) {
      res.status(422).send(err);
    }
  });

  // Delete an existing post
  app.delete('/api/posts/:postId', requireLogin, async (req, res) => {
    const post = await Post.findOne({ _id: req.params.postId })
    const tournament = await Tournament.findOne({ _id: post._tournament })

    // Author validation
    let userId = post._user.toString();
    if(req.user.id !== userId) {
      return res.status(401).send({ error: "You can't edit this post." });
    }

    try {
      // New tournament.forum array without post to be deleted's id
      let updatedPostList = tournament.forum.filter(ele => {
        return ele !== post.id.toString();
      });

      // Removes post from database and reassigns forum array
      Comment.deleteMany({ _post: post.id }).exec();
      Post.findByIdAndRemove(post.id).exec();
      tournament.forum = updatedPostList;
      const newTournament = await tournament.save();
      res.send(newTournament)
    } catch (err) {
      res.status(422).send(err);
    }
  });
}
