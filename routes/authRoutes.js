const passport = require('passport');

module.exports = app => {

/*
  OAuth

  // Google OAuth (login/ sign up)
  // app.get('/auth/google', );


  // Google OAuth (callback url after authentication)
  // app.get('/auth/google/callback', );

  // Facebook OAuth (login/ sign up)
  // app.get('/auth/facebook/', );


  // Facebook OAuth (callback url after authentication)
  // app.get('/auth/facebook/callback');

*/

  // Facebook OAuth (login/ sign up)
  app.get('/auth/facebook/',
    passport.authenticate('facebook')
  );

  app.get('/auth/facebook/callback',
    passport.authenticate('facebook', { failureRedirect: '/'}),
    (req, res) => {
      res.redirect('http://localhost:5000/');
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

  app.get('/', (req, res) => {
    res.send("Sick auth");
  })

}
