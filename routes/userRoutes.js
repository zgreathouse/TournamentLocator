const mongoose = require('mongoose');
// const Path = require('path-parser');
// const { URL } = require('url');

const requireLogin = require('../middlewares/requireLogin');

const User = mongoose.model('users');

module.exports = app => {
  app.patch('/api/users/', requireLogin, async (req, res) =>{
    User.update({
      _id: req.user.id },
      { $set: {
        username: req.body.username
        title: req.body.title,                                                        // the user's title
        city: req.body.city,
        travelRange: req.body.travelRange,
        followedGames: req.body.followedGames,
        followedSeries: req.body.followedSeries,
        finishAccountSetup: req.body.finishAccountSetup,
        tournaments: req.body.tournaments
        }
      }, //callback for error handling and immediate execution
      (err) => {
        if(err) {
          res.status(422).send(err);
        }
      }
    )
    res.send(req.user);
  })

  app.delete('/api/users/', requireLogin, async (req, res) =>{

  })
};
