<<<<<<< HEAD

=======
>>>>>>> 0a33ac0e844cf4e69dba4d16a78510de35190273
const mongoose = require('mongoose');

const requireLogin = require('../middlewares/requireLogin');

const User = mongoose.model('users');
const Tournament = mongoose.model('tournaments');

// Edits User in db
module.exports = app => {
<<<<<<< HEAD
  app.patch('/api/currentUser', requireLogin, async (req, res) => {
    await User.update({
=======
<<<<<<< HEAD
  app.patch('/api/currentUser', requireLogin, async (req, res) => {
    await User.update({
      _id: req.user.id },
      { $set: {
          username: req.user.username || req.body.username,
          city: req.body.city,
          travelRange: req.body.travelRange,
          followedGames: req.body.followedGames,
          finishAccountSetup: true
=======
  app.patch('/api/users/', requireLogin, (req, res) =>{
    User.update({
>>>>>>> 76018ea1e78e5e50af1bde6b34b24ced09150773
      _id: req.user.id },
      { $set: {
        username: req.user.username || req.body.username,
        city: req.body.city,
        travelRange: req.body.travelRange,
        followedGames: req.body.followedGames,
<<<<<<< HEAD
        finishAccountSetup: true
=======
        followedSeries: req.body.followedSeries,
        finishAccountSetup: req.body.finishAccountSetup,
        tournaments: req.body.tournaments
>>>>>>> 0a33ac0e844cf4e69dba4d16a78510de35190273
>>>>>>> 76018ea1e78e5e50af1bde6b34b24ced09150773
        }
      }, // Callback for error handling and immediate execution
      (err) => {
        if(err) {
          res.status(422).send(err);
        }
<<<<<<< HEAD
    });

    const newUser = await User.findById(req.user.id);
    res.send(newUser);
  });

//Deletes all tournaments created by curretUser then removes User from db
  app.delete('/api/currentUser', requireLogin, async (req, res) =>{
=======
      }
    )
    // Gets updated user to send back to frontend
    const newUser = await User.findById(req.user.id);

    res.send(newUser);
  })
<<<<<<< HEAD
// Deletes all tournaments created by curretUser then removes User from db
  app.delete('/api/currentUser', requireLogin, async (req, res) => {
=======
//Deletes all tournaments created by curretUser then removes User from db
//#####Currently not working. Tries to make delete request to '/'######
  app.delete('/api/users/', requireLogin, async (req, res) =>{
>>>>>>> 0a33ac0e844cf4e69dba4d16a78510de35190273
>>>>>>> 76018ea1e78e5e50af1bde6b34b24ced09150773
    try {
      await Tournament.deleteMany({ _user: req.user.id }).exec();
      await User.find({ _id: req.user.id }).remove().exec();
      res.status(200).send({})
    } catch (err) {
      res.status(422).send(err)
    }
<<<<<<< HEAD
  });
=======
  })
>>>>>>> 0a33ac0e844cf4e69dba4d16a78510de35190273
};
