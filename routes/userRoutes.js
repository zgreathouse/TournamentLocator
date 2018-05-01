const mongoose = require('mongoose');

const requireLogin = require('../middlewares/requireLogin');

const User = mongoose.model('users');
const Tournament = mongoose.model('tournaments');

module.exports = app => {
  app.patch('/api/users/', requireLogin, (req, res) =>{
    User.update({
      _id: req.user.id },
      { $set: {
        username: req.body.username,
        title: req.body.title,
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
//Deletes all tournaments created by curretUser then removes User from db
//#####Currently not working. Tries to make delete request to '/'######
  app.delete('/api/users/', requireLogin, async (req, res) =>{
    try {
      await Tournament.deleteMany({ _user: req.user.id }).exec();
      await User.find({ _id: req.user.id }).remove().exec();
      res.status(200).send({})
    } catch (err) {
      res.status(422).send(err)
    }
  })
};
