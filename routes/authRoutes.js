const passport = require('passport');
const requireLogin = require('../middlewares/requireLogin');
const mongoose = require('mongoose');

const User = mongoose.model('users');

module.exports = app => {

  // Facebook OAuth (login/ sign up)
  app.get('/auth/facebook/',
    passport.authenticate('facebook')
  );

  // Facebook OAuth callback (direct user after logging in or signing up)
  app.get('/auth/facebook/callback',
    passport.authenticate('facebook'),
    (req, res) => {
      //check if user has existing values for username, title, and city.
      //if they do they will be redirected to the dashboard, and if they haven't
      //they will be redirected to the user edit page to input their data upon login/ signup
      if(req.user.finishAccountSetup) {
        res.redirect('/'); //this route will later change to the dashboard
      } else {
        res.redirect('/user/edit'); //this route will later change to the edit user page
      }
    }
  );

  app.get('/auth/google',
    passport.authenticate('google', {
      scope: ['profile']
    })
  );

  app.get('/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      if(req.user.finishAccountSetup){
        res.redirect('/')
      } else {
        res.redirect('/user/edit') //will change later to accommidate frontend route vs backend route
      }
    }
  );

  // Get the current user
  app.get('/api/currentUser', (req, res) => {
    res.send(req.user);
  });

  //Logout the current User and redirects to root route
  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

}
