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
        res.redirect('/'); //this route will later change to the edit user page
      }
    }
  );


//will test this route later, once the frontend is built out
  // // Route for updating the user's attributes
  // app.patch('/api/edituser', requireLogin, async (req, res) => {
  //   //deconstruct fields from the request body
  //   const { id, username, title, games, city } = req.body;
  //
  //   Todo.findById(req.body._id, (err, user) => {
  //     // Handle any possible errors
  //     if (err) {
  //         res.status(500).send(err);
  //     } else {
  //       // Update each field with any possible field that may have been submitted in the body of the request
  //       // If that field isn't in the request body, default back to whatever it was before.
  //       user.username = username || user.username;
  //       user.title = title || user.title;
  //       user.games = games || user.games;
  //       user.city = city || user.city;
  //
  //       // Save the updated document back to the database
  //       user.save((err, user) => {
  //           if (err) {
  //               res.status(500).send(err)
  //           }
  //           res.status(200).send(user);
  //       });
  //     }
  //   });
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
