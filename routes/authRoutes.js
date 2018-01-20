const passport = require('passport');

module.exports = app => {

  // Facebook OAuth (login/ sign up)
  app.get('/auth/facebook/',
    passport.authenticate('facebook')
  );

  app.get('/auth/facebook/callback',
    passport.authenticate('facebook'),
    (req, res) => {

      //if the user has inputted their username, title, and city
      //they will be redirected to the dashboard, and if they haven't
      //they will be redirected to the user edit page to input their data
      if(req.user.finishAccountSetup) {
        res.redirect('/'); //this route will later change to the dashboard
      } else {
        res.redirect('/'); //this route will later change to the edit user page
      }
    }
  );


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
