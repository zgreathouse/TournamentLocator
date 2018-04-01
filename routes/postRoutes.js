const mongoose = require('mongoose');
const Path = require('path-parser');
const { URL } = require('url');

const requireLogin = require('../middlewares/requireLogin');
const requireUsername = require('../middlewares/requireUsername');

const Tournament = mongoose.model('tournaments');
const Post = mongoose.model('posts');

module.exports = app => {
  // Get an index of all the the posts for a given tournament
  app.get('/api/posts/:tournamentId', async (req, res) => {
    const p = new Path('/api/posts/:tournamentId');
    const match = p.test(req.url);

    const allPosts = await Post.find({ _tournament: match.tournamentId });

    try {
      // if(allPosts.length === 0){
      //   res.send({ emptyMessage: "No Posts Yet" })
      // }
      //allPosts.reverse to send posts with newest first
      res.send(allPosts.reverse());
    } catch (err) {
      res.status(422).send(err);
    }
  });

  // Create a new post to be added to a Tournament’s collection of posts
  app.post('/api/posts/:tournamentId', requireLogin, requireUsername, async (req, res) => {
    const p = new Path('/api/posts/:tournamentId');
    const match = p.test(req.url);

    const tournament = await Tournament.findOne({ _id: match.tournamentId });

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
    } catch(err){
      res.status(422).send(err);
    }
  });

  // Update (edit) an existing post
  app.patch('/api/posts/:postId', requireLogin, async (req, res) => {
    const p = new Path('/api/posts/:postId')
    const match = p.test(req.url);

    const post = await Post.findOne({ _id: match.postId })
    try {
      //author validation
      let userId = post._user.toString();
      if(req.user.id !== userId) {
        return res.status(401).send({ error: "You can't edit this post." });
      }

      Post.update({
        _id: post.id },
        { $set: {
          title: req.body.title,
          body: req.body.body,
          }
        }
      ).exec();

      res.send(req.user);
    } catch (err) {
      res.status(422).send(err);
    }
  });

  // Delete an existing post
  app.delete('/api/posts/:postId', requireLogin, async (req, res) => {
    const p = new Path('/api/posts/:postId')
    const match = p.test(req.url);

    const post = await Post.findOne({ _id: match.postId })
    const tournament = await Tournament.findOne({ _id: post._tournament })

    //author validation
    let userId = post._user.toString();
    if(req.user.id !== userId) {
      return res.status(401).send({ error: "You can't edit this post." });
    }

    try {
      //new tournament.forum array without post to be deleted's id
      let updatedPostList = tournament.forum.filter(ele => {
        return ele !== post.id.toString();
      });

      //removes post from database and reassigns forum array
      Post.findByIdAndRemove(post.id).exec();
      tournament.forum = updatedPostList;
      const newTournament = await tournament.save();
      res.send(newTournament)
    } catch (err) {
      res.status(422).send(err);
    }
  });
}
