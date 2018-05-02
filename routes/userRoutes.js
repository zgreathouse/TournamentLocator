const mongoose = require('mongoose');

const requireLogin = require('../middlewares/requireLogin');

const User = mongoose.model('users');
const Tournament = mongoose.model('tournaments');

module.exports = app => {
  app.patch('/api/currentUser', requireLogin, (req, res) => {
    User.update({
      _id: req.user.id },
      { $set: {
        username: req.body.username,
        city: req.body.city,
        travelRange: req.body.travelRange,
        followedGames: req.body.followedGames,
        finishAccountSetup: true
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
//Deletes all tournaments created by curretUser then removes User from db
  app.delete('/api/currentUser', requireLogin, async (req, res) => {
    try {
      await Tournament.deleteMany({ _user: req.user.id }).exec();
      await User.find({ _id: req.user.id }).remove().exec();
      res.status(200).send({})
    } catch (err) {
      res.status(422).send(err)
    }
  })
};
