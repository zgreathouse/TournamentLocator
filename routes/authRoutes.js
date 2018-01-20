const passport = require('passport');

module.exports = app => {
  
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
        res.redirect('/user/edit') //will change later to accomidate frontend route vs backend route
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
