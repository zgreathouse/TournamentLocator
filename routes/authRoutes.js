const passport = require('passport');
const requireLogin = require('../middlewares/requireLogin');
const mongoose = require('mongoose');

const User = mongoose.model('users');

module.exports = app => {

  // Facebook OAuth (login/ sign up)
  app.get('/auth/facebook/',
    passport.authenticate('facebook')
  );

  app.get('/auth/facebook/callback',
    passport.authenticate('facebook'),
    (req, res) => {
      //check if user has existing values for username, title, and city.
      //if they do they will be redirected to the dashboard, and if they haven't
      //they will be redirected to the user edit page to input their data upon login/ signup
      if(req.user.finishAccountSetup) {
        res.redirect('/'); //this route will later change to the dashboard
      } else {
        res.redirect('/'); //this route will later change to the edit user page
      }
    }
  );

  // app.patch('/api/edituser', requireLogin, async (req, res) => {
  //   //deconstruct fields from the request body
  //   const { id, username, title, games, city } = req.body;
  //   let query = { _id: id };
  //
  //
  //
  //
  // });


  // Get the current user
  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });

  //Logout the current User
  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

}
