

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


  // Get the current user
  app.get('api/current_user', (res, req) => {
    res.send(req.user);
  });

  //Logout the current User
  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

}
